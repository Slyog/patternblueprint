"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TestItem from './TestItem';
import { testQuestions } from '../../lib/test/questions';

export default function TestModule() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});

  return (
    <div className="pb-container" style={{ maxWidth: '720px' }}>
      <div className="pb-card">
        <div className="pb-card-body pb-flex pb-flex-col pb-gap-6">
          <h2 className="pb-h2 pb-mb-2">
            Test Module
          </h2>
          <div className="pb-flex pb-flex-col pb-gap-4">
            {testQuestions.map((question) => (
              <TestItem
                key={question.id}
                title={question.title}
                body={question.body}
                options={question.options}
                onSelect={(option) => {
                  setAnswers((prev) => ({ ...prev, [question.id]: option }));
                }}
              />
            ))}
          </div>
          <button
            type="button"
            className="w-full pb-body bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#5ee0ff] hover:shadow-[0_0_12px_rgba(94,224,255,0.25)] rounded-md py-3 mt-8 transition"
            onClick={() => {
              localStorage.setItem("pb_test_answers", JSON.stringify(answers));
              router.push("/test/result");
            }}
          >
            Finish Test
          </button>
        </div>
      </div>
    </div>
  );
}

