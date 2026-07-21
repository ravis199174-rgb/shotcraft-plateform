import React, { useState } from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

export default function SHOTCRAFT() {
  const [stage, setStage] = useState(1);
  const [idea, setIdea] = useState('');
  const [research, setResearch] = useState('');
  const [script, setScript] = useState('');
  const [voice, setVoice] = useState('male');
  const [language, setLanguage] = useState('hindi');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-black mb-2 text-orange-400 flex items-center justify-center gap-3">
            <Sparkles size={40} /> SHOTCRAFT
          </h1>
          <p className="text-gray-400">Craft Videos in 50 Minutes • 11 Stages</p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            {[1,2,3,4,5].map((s) => (
              <button
                key={s}
                onClick={() => setStage(s)}
                className={`w-8 h-8 rounded-full text-xs font-bold ${
                  stage === s ? 'bg-orange-500 scale-110' : 'bg-gray-700'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="bg-gray-900/50 border border-orange-500/30 rounded-2xl p-8 mb-8">
          {stage === 1 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">💡 Stage 1: Your Idea</h2>
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="अपना video idea लिखो..."
                className="w-full h-40 bg-gray-800/50 text-white rounded-lg p-4 border border-orange-500/30 mb-4"
              />
              <button
                onClick={() => setStage(2)}
                disabled={!idea}
                className="w-full py-3 bg-orange-500 rounded-lg font-bold disabled:opacity-50"
              >
                अगला Stage जाओ →
              </button>
            </div>
          )}

          {stage === 2 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">🔍 Stage 2: Research</h2>
              <textarea
                value={research}
                onChange={(e) => setResearch(e.target.value)}
                placeholder="Research points लिखो..."
                className="w-full h-40 bg-gray-800/50 text-white rounded-lg p-4 border border-orange-500/30 mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setStage(1)}
                  className="flex-1 py-3 bg-gray-700 rounded-lg"
                >
                  ← पिछला
                </button>
                <button
                  onClick={() => setStage(3)}
                  disabled={!research}
                  className="flex-1 py-3 bg-orange-500 rounded-lg disabled:opacity-50"
                >
                  अगला →
                </button>
              </div>
            </div>
          )}

          {stage === 3 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">📝 Stage 3: Script</h2>
              <textarea
                value={script}
                onChange={(e) => setScript(e.target.value)}
                placeholder="अपनी script लिखो..."
                className="w-full h-40 bg-gray-800/50 text-white rounded-lg p-4 border border-orange-500/30 mb-4"
              />
              <div className="flex gap-3">
                <button
                  onClick={() => setStage(2)}
                  className="flex-1 py-3 bg-gray-700 rounded-lg"
                >
                  ← पिछला
                </button>
                <button
                  onClick={() => setStage(4)}
                  disabled={!script}
                  className="flex-1 py-3 bg-orange-500 rounded-lg disabled:opacity-50"
                >
                  अगला →
                </button>
              </div>
            </div>
          )}

          {stage === 4 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">🎙️ Stage 4: Voiceover</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2">Voice चुनो:</label>
                  <select
                    value={voice}
                    onChange={(e) => setVoice(e.target.value)}
                    className="w-full bg-gray-800/50 text-white rounded-lg p-3 border border-orange-500/30"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2">Language:</label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full bg-gray-800/50 text-white rounded-lg p-3 border border-orange-500/30"
                  >
                    <option value="hindi">Hindi</option>
                    <option value="hinglish">Hinglish</option>
                    <option value="english">English</option>
                  </select>
                </div>
              </div>
              <p className="mb-4 text-green-400">✅ Voiceover तैयार!</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setStage(3)}
                  className="flex-1 py-3 bg-gray-700 rounded-lg"
                >
                  ← पिछला
                </button>
                <button
                  onClick={() => setStage(5)}
                  className="flex-1 py-3 bg-orange-500 rounded-lg"
                >
                  अगला →
                </button>
              </div>
            </div>
          )}

          {stage === 5 && (
            <div>
              <h2 className="text-3xl font-bold mb-4">🎬 Stage 5: Video</h2>
              <p className="text-gray-300 mb-4">
                आपका video तैयार है! ✅
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Idea: {idea}<br/>
                Research: {research}<br/>
                Script: {script}<br/>
                Voice: {voice} ({language})
              </p>
              <button
                onClick={() => setStage(1)}
                className="w-full py-3 bg-green-500 rounded-lg font-bold"
              >
                🎉 दूसरा Video बनाओ!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}