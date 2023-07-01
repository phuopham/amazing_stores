"use client"

import { Modal } from "@/components/ui/modal"
import { useStoreModal } from "@/hooks/use-store-modal"

export const StoreModal = () => {
    const StoreModal = useStoreModal()

    return (
        <Modal
            title="Create store"
            description="to start manage new product sets" isOpen={StoreModal.isOpen}
            onClose={StoreModal.onClose}>
            abc
        </Modal>
    )
}