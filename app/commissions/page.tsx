"use client";

import { useState } from "react";
import { Card, CardBody } from "@heroui/card";

export default function Commissions() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();

  const res = await fetch("/api/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (res.ok) {
    alert("Commission request sent!");
  }
}

  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">

      {/* HERO */}

      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold tracking-wide">Commissions</h1>

        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          I create custom artworks inspired by emotions, dreams, and imagination.
          If you'd like a unique piece made just for you, feel free to request a commission.
        </p>
      </div>

      {/* COMMISSION TYPES */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-20">

        <Card className="bg-neutral-900">
          <CardBody>
            <h3 className="text-xl font-semibold">Portrait</h3>
            <p className="text-gray-400 mt-2">
              Custom portraits drawn in my artistic style.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-neutral-900">
          <CardBody>
            <h3 className="text-xl font-semibold">Dream Artwork</h3>
            <p className="text-gray-400 mt-2">
              Surreal pieces inspired by dreams and emotions.
            </p>
          </CardBody>
        </Card>

        <Card className="bg-neutral-900">
          <CardBody>
            <h3 className="text-xl font-semibold">Illustration</h3>
            <p className="text-gray-400 mt-2">
              Personalized creative illustrations based on your idea.
            </p>
          </CardBody>
        </Card>

      </div>

      {/* CONTACT FORM */}

      <div className="max-w-xl mx-auto">

        <h2 className="text-3xl font-bold text-center mb-8">
          Request a Commission
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 bg-neutral-900 rounded-lg outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full p-3 bg-neutral-900 rounded-lg outline-none"
            required
          />

          <textarea
            placeholder="Describe your idea..."
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 bg-neutral-900 rounded-lg outline-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
          >
            Send Request
          </button>

        </form>

      </div>

    </div>
  );
}