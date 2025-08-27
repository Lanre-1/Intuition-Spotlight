"use client"

export function ProfileHeader() {
  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white text-center mb-8">
      <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center text-6xl mx-auto mb-4 border-4 border-white/30">
        👤
      </div>
      <h1 className="text-4xl font-bold mb-2">Alex Chen</h1>
      <div className="font-mono text-lg opacity-90 mb-4">0x1234...5678</div>
      <p className="max-w-2xl mx-auto opacity-95 text-lg">
        Web3 developer and researcher passionate about privacy-preserving technologies. 
        Contributing to the future of decentralized knowledge curation.
      </p>
    </div>
  )
}
