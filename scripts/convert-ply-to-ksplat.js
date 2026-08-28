#!/usr/bin/env node
/**
 * Convert 04_05_2026.ply → public/splats/site.ksplat
 * Uses @mkkellogg/gaussian-splats-3d PlyParser + SplatBufferGenerator.
 * Compression level 1 (quantised positions, half-precision SH).
 * Run: node scripts/convert-ply-to-ksplat.js
 */
'use strict'
const fs   = require('fs')
const path = require('path')

const ROOT    = path.resolve(__dirname, '..')
const PLY_SRC = path.join(ROOT, '04_05_2026 copy.ply')
const OUT_DIR = path.join(ROOT, 'public', 'splats')
const OUT_FILE = path.join(OUT_DIR, 'site.ksplat')

if (!fs.existsSync(PLY_SRC)) {
  console.error('❌  PLY source not found: ' + PLY_SRC)
  process.exit(1)
}
fs.mkdirSync(OUT_DIR, { recursive: true })

const sizeMB = (fs.statSync(PLY_SRC).size / 1e6).toFixed(1)
console.log('\n📂  Source : ' + PLY_SRC + '  (' + sizeMB + ' MB)')
console.log('📁  Output : ' + OUT_FILE)
console.log('\n⏳  Loading PLY into memory …')

const plyData = fs.readFileSync(PLY_SRC)
const plyBuffer = plyData.buffer.slice(plyData.byteOffset, plyData.byteOffset + plyData.byteLength)

console.log('✅  PLY loaded. Parsing Gaussian splats …')

const { PlyParser, SplatBufferGenerator } = require('@mkkellogg/gaussian-splats-3d')

// outSphericalHarmonicsDegree = 1 (keeps 1st-order SH for good colour at lower size)
const splatArray = PlyParser.parseToUncompressedSplatArray(plyBuffer, 1)
console.log('✅  Parsed ' + splatArray.splatCount.toLocaleString() + ' splats.')
console.log('⏳  Generating optimised ksplat buffer (compression level 1) …')

// getStandardGenerator(alphaRemovalThreshold, compressionLevel)
// compressionLevel 1 = quantised (~4-6x smaller, near-lossless)
const generator = SplatBufferGenerator.getStandardGenerator(1, 1)
const splatBuffer = generator.generateFromUncompressedSplatArray(splatArray)

const outBytes = Buffer.from(splatBuffer.bufferData)
fs.writeFileSync(OUT_FILE, outBytes)

const outMB = (outBytes.byteLength / 1e6).toFixed(1)
console.log('\n✅  Done!  Written ' + outMB + ' MB → ' + OUT_FILE)
console.log('    Serve from: /splats/site.ksplat\n')
