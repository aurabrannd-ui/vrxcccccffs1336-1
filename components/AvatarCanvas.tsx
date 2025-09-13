"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { VRM } from "@pixiv/three-vrm"
import { useEffect, useMemo, useState } from "react"
import { useApp } from "@/lib/store"

function VRMModel() {
  const { vrmFile } = useApp()
  const [vrm, setVrm] = useState<VRM | null>(null)

  const url = useMemo(
    () => (vrmFile ? URL.createObjectURL(vrmFile) : "/avatar.vrm"),
    [vrmFile]
  )

  useEffect(() => {
    // هنا لاحقًا نضيف تحريك الرأس/اليدين أو حركة حسب الصوت
    console.log("تحميل VRM:", url)
  }, [url])

  return vrm ? <primitive object={vrm.scene} /> : null
}

export default function AvatarCanvas() {
  return (
    <Canvas camera={{ position: [0, 1.4, 2.5] }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <VRMModel />
      <OrbitControls />
    </Canvas>
  )
}
