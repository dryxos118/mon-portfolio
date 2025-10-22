import React, { useState } from "react";
import {
  FaEnvelope,
  FaRegCommentDots,
  FaUser,
  FaHeading,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useTheme } from "../../logic/hooks/useTheme";

const SERVICE_ID = "service_14z3zdg";
const TEMPLATE_ID = "template_ao1nvuq";
const PUBLIC_KEY = "95JVxvUFvUAJ66a8Z";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState({
    title: "",
    name: "",
    email: "",
    message: "",
  });

  const [botTrap, setBotTrap] = useState("");
  const [sending, setSending] = useState(false);
  const { theme } = useTheme();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
  };

  const validateForm = (): string | null => {
    if (!form.title.trim()) return "Veuillez indiquer un sujet.";
    if (!form.name.trim()) return "Veuillez indiquer votre nom.";
    if (!form.email.trim()) return "Veuillez indiquer votre adresse e-mail.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Adresse e-mail invalide.";
    if (!form.message.trim()) return "Veuillez écrire un message.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (botTrap.length > 0) {
      console.warn("Spam bot détecté 🚫");
      return;
    }

    const error = validateForm();
    if (error) {
      toast.error(error, { theme: theme === "light" ? "light" : "dark" });
      return;
    }

    const params = {
      title: form.title,
      name: form.name,
      email: form.email,
      message: form.message,
      time: new Date().toLocaleString("fr-FR"),
    };

    setSending(true);

    const sendPromise = emailjs.send(SERVICE_ID, TEMPLATE_ID, params, {
      publicKey: PUBLIC_KEY,
    });

    toast.promise(
      sendPromise,
      {
        pending: "Envoi du message en cours…",
        success: "Message envoyé avec succès !",
        error: "Erreur lors de l’envoi. Réessaie plus tard",
      },
      {
        theme: theme === "light" ? "light" : "dark",
      }
    );

    try {
      await sendPromise;
      setForm({ title: "", name: "", email: "", message: "" });
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="p-4 rounded-3 border shadow-sm">
      <form className="row g-3" onSubmit={handleSubmit} noValidate>
        <input
          type="text"
          value={botTrap}
          onChange={(e) => setBotTrap(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          style={{ position: "absolute", left: "-9999px", opacity: 0 }}
          aria-hidden="true"
        />

        <div className="col-12">
          <label htmlFor="title" className="form-label fw-semibold">
            Sujet
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaHeading />
            </span>
            <input
              id="title"
              className="form-control border-danger"
              placeholder="Objet du message"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="name" className="form-label fw-semibold">
            Nom
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaUser />
            </span>
            <input
              id="name"
              className="form-control"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="email" className="form-label fw-semibold">
            Email
          </label>
          <div className="input-group">
            <span className="input-group-text">
              <FaEnvelope />
            </span>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="vous@exemple.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="message" className="form-label fw-semibold">
            Message
          </label>
          <div className="input-group">
            <span className="input-group-text align-items-start pt-2">
              <FaRegCommentDots />
            </span>
            <textarea
              id="message"
              className="form-control"
              rows={4}
              placeholder="Bonjour…"
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-12">
          <button
            className="btn btn-primary w-100"
            type="submit"
            disabled={sending}
          >
            {sending ? "Envoi en cours…" : "Envoyer"}
          </button>
        </div>
      </form>
    </div>
  );
};
