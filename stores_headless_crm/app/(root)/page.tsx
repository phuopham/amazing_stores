"use client"

import { Modal } from "@/components/ui/modal"

export default function Home() {
  return (
    <div>
      <Modal title="abc" description="test" isOpen onClose={() => { }}>
        Children
      </Modal>
    </div>
  )
}
