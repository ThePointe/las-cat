"use client";

import { useState, use } from "react";
import { ChevronLeft, Phone, Mail, Clock, MapPin, X } from "lucide-react";
import Link from "next/link";
import { inTownRestaurants, nearbyAreas } from "@/app/data";

export default function RestaurantDetail({ params }: { params: Promise<{ name: string }> }) {
  const { name } = use(params);
  const decodedName = decodeURIComponent(name);

  const restaurant = inTownRestaurants.find(r => r.name === decodedName) ||
    nearbyAreas.flatMap(a => a.spots).find(s => s.name === decodedName);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl font-semibold text-gray-900 mb-4">Restaurant not found</p>
          <Link href="/" className="text-blue-600 hover:text-blue-700">Back to home</Link>
        </div>
      </div>
    );
  }

  const images = ("images" in restaurant && restaurant.images) ? restaurant.images : [];
  const fullDesc = "fullDescription" in restaurant ? restaurant.fullDescription : restaurant.description;
  const rating = "rating" in restaurant ? restaurant.rating : null;
  const email = "email" in restaurant ? restaurant.email : null;
  const phone = restaurant.phone || null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 py-4 flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{restaurant.name}</h1>
            <p className="text-sm text-gray-600 mt-1">{restaurant.cuisine}</p>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {images.length > 0 && (
        <div className="bg-black">
          <div className="max-w-4xl mx-auto aspect-video relative overflow-hidden">
            <img
              src={images[selectedImageIndex]}
              alt={`${restaurant.name} - image ${selectedImageIndex + 1}`}
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
            {rating && (
              <div className="mb-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <p className="text-sm font-semibold text-amber-900">★ {rating}</p>
              </div>
            )}

            <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 leading-relaxed mb-8">{fullDesc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {restaurant.tags.map(tag => (
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

              {/* Location */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Location</p>
                    <p className="text-gray-900">{restaurant.location}</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-4 pb-4 border-b border-gray-200">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-600">Hours</p>
                    <p className="text-gray-900 text-sm">{restaurant.hours}</p>
                  </div>
                </div>
              </div>

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
