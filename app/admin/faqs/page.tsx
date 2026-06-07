'use client'

import { useState } from 'react'
import {Plus, Save, Trash2} from 'lucide-react'
import AdminSectionCard from '@/components/admin/AdminSectionCard'

type FAQ = {
    id: number
    question: string
    answer: string
    }

const initialFAQs: FAQ[] = [
    { 
        id: 1,
        question: 'What is your return policy?', 
        answer: 'You can return any item within 30 days of purchase.' },
    { 
        id: 2, 
        question: 'Do you offer international shipping?', 
        answer: 'Yes, we ship to most countries worldwide.' },
    { 
        id: 3, 
        question: 'How can I track my order?', 
        answer: 'Once your order is shipped, you will receive a tracking number via email.' },
]

export default function FAQAdminPage() {
    const [faqs, setFaqs] = useState<FAQ[]>(initialFAQs)

    const addFAQ=()=>{
        const newFAQ: FAQ ={
            id: Date.now(),
            question: '',
            answer: '',
        }
        setFaqs((currentFAQs) => [...currentFAQs, newFAQ])
    }
    const updateFAQ =(
        id: number,
        field: 'question' | 'answer',
        value: string,
    )=>{
        setFaqs((currentFAQs) =>
            currentFAQs.map((faq) =>
                faq.id === id ? { ...faq, [field]: value } : faq
            )
        )
    }
    const deleteFAQ = (id: number) => {
        setFaqs((currentFAQs) => currentFAQs.filter((faq) => faq.id !== id))
    }
    const saveFAQs = () => {
        // Here you would typically send the FAQs to your backend API to save them
        console.log('Saving FAQs:', faqs)
    }
    
    return (
      <AdminSectionCard
        title="FAQ Manager"
        eyebrow={`${faqs.length} Questions`}
        description="Add, edit, and remove frequently asked questions."
      >
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-medium text-slate-900">
                  Question {index + 1}
                </h3>

                <button
                  onClick={() => deleteFAQ(faq.id)}
                  aria-label={`Delete question ${index + 1}`}
                  className="rounded-xl border border-slate-200 bg-white p-2 text-slate-400 hover:text-red-500"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Question
                  </span>

                  <input
                    value={faq.question}
                    onChange={(event) =>
                      updateFAQ(faq.id, "question", event.target.value)
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Answer
                  </span>

                  <textarea
                    rows={4}
                    value={faq.answer}
                    onChange={(event) =>
                      updateFAQ(faq.id, "answer", event.target.value)
                    }
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-slate-400"
                  />
                </label>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-between gap-3">
          <button
            onClick={addFAQ}
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700"
          >
            <Plus className="h-4 w-4" />
            Add Question
          </button>

          <button
            onClick={saveFAQs}
            className="inline-flex items-center gap-2 rounded-2xl bg-[#08152f] px-4 py-3 text-sm font-medium text-white"
          >
            <Save className="h-4 w-4" />
            Save FAQs
          </button>
        </div>
      </AdminSectionCard>
    );
        
        }
