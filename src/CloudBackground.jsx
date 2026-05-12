import { useEffect, useRef } from 'react'

const LAYERS = [
  {
    yCtr: 0.15, h: 0.24, freqs: [2.0, 3.8], amps: [0.055, 0.024],
    speed: 0.00028, phase: 0.0,
    c1: 'rgba(242,249,255,0.92)', c2: 'rgba(188,215,242,0.85)', c3: 'rgba(155,185,228,0.72)'
  },
  {
    yCtr: 0.38, h: 0.27, freqs: [2.5, 4.2], amps: [0.065, 0.027],
    speed: 0.00021, phase: 1.4,
    c1: 'rgba(250,245,255,0.92)', c2: 'rgba(210,192,234,0.85)', c3: 'rgba(172,162,222,0.72)'
  },
  {
    yCtr: 0.60, h: 0.29, freqs: [2.2, 3.6], amps: [0.070, 0.029],
    speed: 0.00031, phase: 2.9,
    c1: 'rgba(238,248,255,0.93)', c2: 'rgba(178,212,242,0.87)', c3: 'rgba(146,180,226,0.74)'
  },
  {
    yCtr: 0.82, h: 0.31, freqs: [1.9, 3.3], amps: [0.060, 0.025],
    speed: 0.00037, phase: 4.3,
    c1: 'rgba(240,248,255,0.94)', c2: 'rgba(182,213,242,0.89)', c3: 'rgba(150,183,228,0.76)'
  },
]

function waveY(x, W, phase, freqs, amps) {
  return freqs.reduce((sum, f, i) =>
    sum + Math.sin((x / W) * Math.PI * f + phase * (i * 0.6 + 1)), 0
  ) * amps[0] + Math.sin((x / W) * Math.PI * freqs[1] + phase * 1.8) * amps[1]
}

export default function CloudBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let raf
    let t = 0

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function drawLayer(layer, W, H, time) {
      const phase = layer.phase + time * layer.speed * Math.PI * 2
      const yCtr = layer.yCtr * H
      const halfH = (layer.h * H) / 2
      const scaledAmps = layer.amps.map(a => a * H)
      const steps = 100

      ctx.save()
      ctx.beginPath()

      for (let i = 0; i <= steps; i++) {
        const x = (i / steps) * W
        const y = yCtr - halfH + waveY(x, W, phase, layer.freqs, scaledAmps)
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }

      ctx.lineTo(W, H + 10)
      ctx.lineTo(0, H + 10)
      ctx.closePath()

      const topY = yCtr - halfH - scaledAmps[0]
      const botY = yCtr + halfH
      const grad = ctx.createLinearGradient(0, topY, 0, botY)
      grad.addColorStop(0,    layer.c1)
      grad.addColorStop(0.28, layer.c2)
      grad.addColorStop(0.82, layer.c3)
      grad.addColorStop(1,    'rgba(128,155,212,0.58)')

      ctx.fillStyle = grad
      ctx.shadowColor = 'rgba(110, 145, 205, 0.22)'
      ctx.shadowBlur = 28
      ctx.shadowOffsetY = 12
      ctx.fill()
      ctx.restore()
    }

    function draw() {
      const W = canvas.width
      const H = canvas.height
      t++

      ctx.clearRect(0, 0, W, H)

      const bg = ctx.createLinearGradient(0, 0, 0, H)
      bg.addColorStop(0, '#cce3f7')
      bg.addColorStop(1, '#ddeaf7')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, W, H)

      LAYERS.forEach(l => drawLayer(l, W, H, t))

      raf = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    />
  )
}
