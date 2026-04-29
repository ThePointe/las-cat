"use client";

import { useState, use } from "react";
import { ChevronLeft, Phone, Mail, Clock, MapPin, X, Globe, AlertCircle, DollarSign } from "lucide-react";
import Link from "next/link";
import { activities, dayTrips, boating, transport, privateChefs } from "@/app/data";

type ContentType = typeof activities[0] | typeof dayTrips[0] | typeof boating[0] | typeof transport[0] | typeof privateChefs[0] | any;

export default function DetailsPage({ params }: { params: Promise<{ category: string; name: string }> }) {
  const { category, name } = use(params);
  const decodedName = decodeURIComponent(name);

  let item: ContentType | undefined;

  switch (category) {
    case "activity":
      item = activities.find(a => a.title === decodedName);
      break;
    case "daytrip":
      item = dayTrips.find(d => d.name === decodedName);
      break;
    case "boating":
      item = boating.find(b => b.name === decodedName);
      break;
    case "transport":
      item = transport.find(t => t.title === decodedName);
      break;
    case "chef":
      item = privateChefs.find(c => c.name === decodedName);
      break;
  }

  if (!item) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-900 mb-4">Item not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700">Back to home</Link>
        </div>
      </div>
    );
  }

  const images: string[] = (item as any).images || [];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const title = (item as any).title || (item as any).name;
  const fullDesc = (item as any).fullDescription || (item as any).description;
  const phone = (item as any).phone || null;
  const email = (item as any).email || null;
  const tags = (item as any).tags || [];
  const pricing = (item as any).pricing || null;
  const duration = (item as any).duration || null;
  const difficulty = (item as any).difficulty || null;
  const distance = (item as any).distance || null;
  const type = (item as any).type || null;
  const contact = (item as any).contact || null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {type && <p className="text-sm text-gray-600 mt-1">{type}</p>}
            {distance && <p className="text-sm text-gray-600 mt-1">~ {distance} away</p>}
          </div>
        </div>
      </div>

      {/* Gallery */}
      {images.length > 0 && (
        <div className="bg-black">
          <div className="max-w-4xl mx-auto aspect-video relative overflow-hidden">
            <img
              src={images[selectedImageIndex]}
              alt={`${title} - image ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={() => setLightboxOpen(true)}
            />
          </div>

          {/* Thumbnail strip */}
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 flex gap-2 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === selectedImageIndex ? "border-white" : "border-gray-700 opacity-50 hover:opacity-75"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Overview</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{fullDesc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-2xl p-6 sticky top-24">
              <h3 className="font-semibold text-gray-900 mb-4">Details</h3>

              {/* Distance */}
              {distance && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Distance</p>
                      <p className="text-gray-900">{distance}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Duration */}
              {duration && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex gap-3">
                    <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Duration</p>
                      <p className="text-gray-900 text-sm">{duration}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Difficulty */}
              {difficulty && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex gap-3">
                    <AlertCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Difficulty</p>
                      <p className="text-gray-900 text-sm">{difficulty}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pricing */}
              {pricing && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <div className="flex gap-3">
                    <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Pricing</p>
                      <p className="text-gray-900 text-sm">{pricing}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Phone */}
              {phone && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <a href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="flex gap-3 hover:opacity-70 transition-opacity">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Phone</p>
                      <p className="text-blue-600 font-semibold text-sm">{phone}</p>
                    </div>
                  </a>
                </div>
              )}

              {/* Contact (for boating/transport) */}
              {contact && (
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <a href={`tel:${contact.replace(/[^+\d]/g, "")}`} className="flex gap-3 hover:opacity-70 transition-opacity">
                    <Phone className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Contact</p>
                      <p className="text-blue-600 font-semibold text-sm">{contact}</p>
                    </div>
                  </a>
                </div>
              )}

              {/* Email */}
              {email && (
                <div className="pb-4">
                  <a href={`mailto:${email}`} className="flex gap-3 hover:opacity-70 transition-opacity">
                    <Mail className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-600">Email</p>
                      <p className="text-blue-600 font-semibold text-sm">{email}</p>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white hover:bg-white/10 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img
            src={images[selectedImageIndex]}
            alt=""
            className="max-w-full max-h-[90vh] object-contain"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
