import React, { useState, useRef, useEffect } from 'react'

type Viewer3DModalProps = {
    open: boolean
    onClose: () => void
}

const frameImages = [
    { id: 1, name: 'Sunglasses Gradient', image: '/assets/images/frame1.png' },
    { id: 2, name: 'Brown Tortoiseshell', image: '/assets/images/frame2.png' },
    { id: 3, name: 'Green Geometric', image: '/assets/images/frame3.png' },
    { id: 4, name: 'Gray Round', image: '/assets/images/frame4.png' },
    { id: 5, name: 'Black Classic', image: '/assets/images/frame5.png' },
]

const Viewer3DModal: React.FC<Viewer3DModalProps> = ({ open, onClose }) => {
    const [selectedFrame, setSelectedFrame] = useState(frameImages[0])
    const [rotation, setRotation] = useState({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!open) {
            setRotation({ x: 0, y: 0 })
            setSelectedFrame(frameImages[0])
            setIsDragging(false)
        }
    }, [open])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging) return

            const deltaX = e.clientX - dragStart.x
            const deltaY = e.clientY - dragStart.y

            setRotation(prev => ({
                x: Math.max(-90, Math.min(90, prev.x + deltaY * 0.5)),
                y: prev.y + deltaX * 0.5
            }))

            setDragStart({ x: e.clientX, y: e.clientY })
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove)
            window.addEventListener('mouseup', handleMouseUp)
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseup', handleMouseUp)
        }
    }, [isDragging, dragStart])

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsDragging(true)
        setDragStart({ x: e.clientX, y: e.clientY })
    }

    const handleReset = () => {
        setRotation({ x: 0, y: 0 })
    }

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="relative w-full max-w-7xl max-h-[90vh] mx-auto bg-slate-900 flex flex-col rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-700">
                    <button
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="text-white font-semibold">FITTINGBOX</div>
                    <div className="w-10"></div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Center - 3D Viewer */}
                    <div className="flex-1 flex items-center justify-center bg-white relative">
                        <div
                            ref={containerRef}
                            className="relative w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
                            onMouseDown={handleMouseDown}
                        >
                            <div
                                className="relative transition-transform duration-100"
                                style={{
                                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                                }}
                            >
                                <img
                                    src={selectedFrame.image}
                                    alt={selectedFrame.name}
                                    className="w-64 h-64 md:w-80 md:h-80 object-contain"
                                    draggable={false}
                                />
                            </div>

                            {/* Bottom Controls */}
                            <div className="absolute bottom-4 left-4 flex gap-3">
                                <button className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors">
                                    <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                </button>
                                <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                                    <span className="text-xs font-bold text-slate-800">3D</span>
                                </div>
                            </div>

                            {/* Reset Button */}
                            <button
                                onClick={handleReset}
                                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-lg transition-colors"
                            >
                                <svg className="w-6 h-6 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Right Sidebar - Frame Selection */}
                    <div className="w-80 bg-slate-800 overflow-y-auto border-l border-slate-700">
                        <div className="p-4 space-y-4">
                            {frameImages.map((frame) => (
                                <div
                                    key={frame.id}
                                    className={`bg-white rounded-lg p-4 cursor-pointer transition-all ${selectedFrame.id === frame.id ? 'ring-2 ring-blue-500' : 'hover:shadow-lg'
                                        }`}
                                    onClick={() => setSelectedFrame(frame)}
                                >
                                    <img
                                        src={frame.image}
                                        alt={frame.name}
                                        className="w-full h-32 object-contain mb-3"
                                    />
                                    <p className="text-sm font-medium text-slate-800 mb-2">{frame.name}</p>
                                    <button className="w-full px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-semibold">
                                        Try-On
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewer3DModal

