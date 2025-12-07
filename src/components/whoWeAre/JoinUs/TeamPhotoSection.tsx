import React from 'react'

const TeamPhotoSection: React.FC = () => {
    return (
        <section className="bg-white py-0">
            <div className="w-full">
                <img
                    src="/assets/images/Visuel-4.png"
                    alt="Fittingbox team members"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                    }}
                />
            </div>
        </section>
    )
}

export default TeamPhotoSection

