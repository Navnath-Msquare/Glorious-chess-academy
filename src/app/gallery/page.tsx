"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Award,
  Sparkles,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Download,
  Share2,
  Eye,
  Check,
  Flame,
} from "lucide-react";

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: "championship" | "tournament" | "training";
  badge: string;
  tagline: string;
}

// 46 High-resolution Academy & Tournament moments
const galleryData: GalleryItem[] = [
  {
    id: 1,
    src: "/gallery/1.jpeg",
    title: "National Podium Glory",
    category: "championship",
    badge: "1st Place",
    tagline: "Podium finish at Maharashtra State Championship",
  },
  {
    id: 2,
    src: "/gallery/2.jpeg",
    title: "Dignitary Stage Felicitation",
    category: "tournament",
    badge: "Honour",
    tagline: "Honouring our champions on the grand stage",
  },
  {
    id: 3,
    src: "/gallery/3.jpeg",
    title: "Trophy Presentation Ceremony",
    category: "championship",
    badge: "Champion",
    tagline: "Receiving the prestigious tournament cup",
  },
  {
    id: 4,
    src: "/gallery/4.jpeg",
    title: "FIDE Classical Rating Tournament",
    category: "tournament",
    badge: "FIDE Event",
    tagline: "2nd Narendraji Firodia Chashak Classical Tournament",
  },
  {
    id: 5,
    src: "/gallery/5.jpeg",
    title: "Masterclass Strategy Session",
    category: "training",
    badge: "Master Coach",
    tagline: "Deep board analysis & tournament preparation",
  },
  {
    id: 6,
    src: "/gallery/6.jpeg",
    title: "Prabodhan Krida Mahotsav",
    category: "tournament",
    badge: "State Event",
    tagline: "46th Annual State Sports Chess Championship",
  },
  {
    id: 7,
    src: "/gallery/7.jpeg",
    title: "Raisoni Memorial International",
    category: "tournament",
    badge: "International",
    tagline: "G.H. Raisoni Memorial FIDE Rapid Chess Championship",
  },
  {
    id: 8,
    src: "/gallery/8.jpeg",
    title: "Stage Recognition & Shield",
    category: "tournament",
    badge: "Felicitation",
    tagline: "Celebrating exceptional chess discipline & victory",
  },
  {
    id: 9,
    src: "/gallery/9.jpeg",
    title: "Grand Stage Award Distribution",
    category: "tournament",
    badge: "Stage Award",
    tagline: "State chess federation award ceremony",
  },
  {
    id: 10,
    src: "/gallery/10.jpeg",
    title: "Distinguished Dignitaries & Winners",
    category: "tournament",
    badge: "Federation",
    tagline: "Guests of honour felicitating tournament stars",
  },
  {
    id: 11,
    src: "/gallery/11.jpeg",
    title: "Championship Trophy & Medal",
    category: "championship",
    badge: "Gold Medal",
    tagline: "Exceptional victory performance on stage",
  },
  {
    id: 12,
    src: "/gallery/12.jpeg",
    title: "Federation Stage Felicitation",
    category: "tournament",
    badge: "Official Event",
    tagline: "Grand prize distribution evening",
  },
  {
    id: 13,
    src: "/gallery/13.jpeg",
    title: "Youth Tournament Stage Honor",
    category: "tournament",
    badge: "Felicitation",
    tagline: "Recognizing outstanding young chess prodigies",
  },
  {
    id: 14,
    src: "/gallery/14.jpeg",
    title: "State Championship Ceremony",
    category: "tournament",
    badge: "State Honour",
    tagline: "Honouring top performing players of the tournament",
  },
  {
    id: 15,
    src: "/gallery/15.jpeg",
    title: "Trophy & Certificate Distribution",
    category: "tournament",
    badge: "Award Ceremony",
    tagline: "Celebrating perseverance, dedication & victory",
  },
  {
    id: 16,
    src: "/gallery/16.jpeg",
    title: "Dignitary Prize Presentation",
    category: "tournament",
    badge: "Felicitation",
    tagline: "Official felicitation by chief tournament guests",
  },
  {
    id: 17,
    src: "/gallery/17.jpeg",
    title: "Annual Championship Stage",
    category: "tournament",
    badge: "Stage Honour",
    tagline: "Memorable moments from the championship closing ceremony",
  },
  {
    id: 18,
    src: "/gallery/18.jpeg",
    title: "Intense Competition Focus",
    category: "training",
    badge: "Match Play",
    tagline: "Pinpoint focus during rated classical match",
  },
  {
    id: 19,
    src: "/gallery/19.jpeg",
    title: "Young Prodigy Concentration",
    category: "training",
    badge: "Match Focus",
    tagline: "Calculating deep combinations over the 64 squares",
  },
  {
    id: 20,
    src: "/gallery/20.jpeg",
    title: "Medal Celebration Moment",
    category: "championship",
    badge: "Medalist",
    tagline: "Smiling with hard-earned tournament medal",
  },
  {
    id: 21,
    src: "/gallery/21.jpeg",
    title: "Academy Training & Game Analysis",
    category: "training",
    badge: "Analysis",
    tagline: "Mastering endgame tactics and tactical motifs",
  },
  {
    id: 22,
    src: "/gallery/22.jpeg",
    title: "Next Move Calculation",
    category: "training",
    badge: "Tactics",
    tagline: "Sharpening strategic depth in the classroom",
  },
  {
    id: 23,
    src: "/gallery/23.jpeg",
    title: "Grand Victory Cup & Certificate",
    category: "championship",
    badge: "Winner Cup",
    tagline: "Historic achievement at inter-school chess tournament",
  },
  {
    id: 24,
    src: "/gallery/24.jpeg",
    title: "Championship Tournament Hall",
    category: "tournament",
    badge: "Battlefield",
    tagline: "Hundreds of players locked in tactical battles",
  },
  {
    id: 25,
    src: "/gallery/25.jpeg",
    title: "Stage Trophy Handover",
    category: "tournament",
    badge: "Award",
    tagline: "Official trophy presentation by tournament arbiters",
  },
  {
    id: 26,
    src: "/gallery/26.jpeg",
    title: "Felicitation by Chief Guests",
    category: "tournament",
    badge: "Recognition",
    tagline: "Honouring excellence in youth sports development",
  },
  {
    id: 27,
    src: "/gallery/27.jpeg",
    title: "MSSA Inter-School Team Winners",
    category: "championship",
    badge: "Team Champions",
    tagline: "Dream Sports MSSA Inter-School Championship victory",
  },
  {
    id: 28,
    src: "/gallery/28.jpeg",
    title: "Tournament Stage Recognition",
    category: "tournament",
    badge: "Prize",
    tagline: "Grand felicitation at district level tournament",
  },
  {
    id: 29,
    src: "/gallery/29.jpeg",
    title: "Award Handover Ceremony",
    category: "tournament",
    badge: "Presentation",
    tagline: "Rewarding strategic brilliance and sportsmanship",
  },
  {
    id: 30,
    src: "/gallery/30.jpeg",
    title: "State Level Champions Gathering",
    category: "tournament",
    badge: "Champions",
    tagline: "Together celebrating Maharashtra's chess talent",
  },
  {
    id: 31,
    src: "/gallery/31.jpeg",
    title: "Youth Tournament Stage Moment",
    category: "tournament",
    badge: "Youth Award",
    tagline: "Encouraging the next generation of grandmasters",
  },
  {
    id: 32,
    src: "/gallery/32.jpeg",
    title: "Prize Giving On Main Stage",
    category: "tournament",
    badge: "Felicitation",
    tagline: "Official award presentation ceremony",
  },
  {
    id: 33,
    src: "/gallery/33.jpeg",
    title: "Trophy Presentation Evening",
    category: "tournament",
    badge: "Trophy Night",
    tagline: "Celebrating triumph and dedication to the royal game",
  },
  {
    id: 34,
    src: "/gallery/34.jpeg",
    title: "MSSA Inter-School Merit Award",
    category: "championship",
    badge: "Merit Award",
    tagline: "Dream Sports MSSA certificate of distinction",
  },
  {
    id: 35,
    src: "/gallery/35.jpeg",
    title: "Dignitary Stage Honour",
    category: "tournament",
    badge: "Honour",
    tagline: "Commending exceptional tournament sportsmanship",
  },
  {
    id: 36,
    src: "/gallery/36.jpeg",
    title: "Stage Felicitation & Cash Prize",
    category: "tournament",
    badge: "Cash Prize",
    tagline: "Rewarding high tournament ratings and performance",
  },
  {
    id: 37,
    src: "/gallery/37.jpeg",
    title: "Annual Chess Trophy Handover",
    category: "tournament",
    badge: "Trophy",
    tagline: "Grand prize distribution on the championship stage",
  },
  {
    id: 38,
    src: "/gallery/38.jpeg",
    title: "Stage Recognition Moment",
    category: "tournament",
    badge: "Certificate",
    tagline: "Official tournament merit felicitation",
  },
  {
    id: 39,
    src: "/gallery/39.jpeg",
    title: "Closing Ceremony Accolades",
    category: "tournament",
    badge: "Closing",
    tagline: "Grand finale of the classical chess tournament",
  },
  {
    id: 40,
    src: "/gallery/40.jpeg",
    title: "Deep Opening Preparation",
    category: "training",
    badge: "Mindset",
    tagline: "Focus and calculation under time pressure",
  },
  {
    id: 41,
    src: "/gallery/41.jpeg",
    title: "Kautikrao Memorial Winner Trophy",
    category: "championship",
    badge: "1st Winner",
    tagline: "1st Late Kautikrao & Kausalyabai Memorial Chess Tournament",
  },
  {
    id: 42,
    src: "/gallery/42.jpeg",
    title: "Tournament Stage Honors",
    category: "tournament",
    badge: "Felicitation",
    tagline: "Felicitation by respected tournament dignitaries",
  },
  {
    id: 43,
    src: "/gallery/43.jpeg",
    title: "All India Inter Zonal Championship",
    category: "championship",
    badge: "National 2nd Runner-Up",
    tagline: "All India Inter Zonal Inter University Chess Championship",
  },
  {
    id: 44,
    src: "/gallery/44.jpeg",
    title: "State Stage Prize Ceremony",
    category: "tournament",
    badge: "State Award",
    tagline: "Acknowledging dedication and strategic mastery",
  },
  {
    id: 45,
    src: "/gallery/45.jpeg",
    title: "University Women's Champion (#1)",
    category: "championship",
    badge: "Rank 1 Winner",
    tagline: "Mahatma Jyoti Rao Phoole University Women's Tournament Winner",
  },
  {
    id: 46,
    src: "/gallery/46.jpeg",
    title: "AIU West Zone Champion Trophy",
    category: "championship",
    badge: "Champion Winner",
    tagline: "AIU West Zone Chess Championship Grand Gold Trophy & Medal",
  },
];

type CategoryFilter = "all" | "championship" | "tournament" | "training";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [visibleCount, setVisibleCount] = useState<number>(12);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  // Filtered dataset
  const filteredPhotos = useMemo(() => {
    if (activeCategory === "all") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  // Displayed batch
  const displayedPhotos = useMemo(() => {
    return filteredPhotos.slice(0, visibleCount);
  }, [filteredPhotos, visibleCount]);

  // Handle Lightbox Navigation
  const openLightbox = (photoId: number) => {
    const idx = filteredPhotos.findIndex((p) => p.id === photoId);
    if (idx !== -1) setSelectedPhotoIndex(idx);
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
  }, []);

  const goToNextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev! + 1) % filteredPhotos.length);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const goToPrevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex(
      (prev) => (prev! - 1 + filteredPhotos.length) % filteredPhotos.length
    );
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goToNextPhoto();
      if (e.key === "ArrowLeft") goToPrevPhoto();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, goToNextPhoto, goToPrevPhoto]);

  // Lock body scroll when Lightbox is active
  useEffect(() => {
    if (selectedPhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedPhotoIndex]);

  const activePhoto =
    selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  const handleShare = (photo: GalleryItem) => {
    if (typeof navigator !== "undefined" && navigator.share) {
      navigator.share({
        title: photo.title,
        text: `${photo.title} - Glorious Chess Academy`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard?.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <main className="min-h-screen bg-[#070707] text-white selection:bg-primary/30 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* ── Background Glow Effects ── */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-[140px] opacity-60 rounded-full" />
        <div className="absolute top-[40%] -left-32 w-96 h-96 bg-primary/10 blur-[130px] rounded-full" />
        <div className="absolute top-[70%] -right-32 w-96 h-96 bg-amber-600/10 blur-[130px] rounded-full" />
      </div>

      {/* ── Hero Section ── */}
      <section className="relative pt-36 md:pt-44 pb-12 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Academy Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-xs md:text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(184,134,11,0.15)]"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span>Glorious Memories & Hall of Fame</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.95] max-w-4xl mx-auto"
          >
            Moments Of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-amber-300 to-yellow-500">
              Grand Victory
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed"
          >
            Every tournament triumph, trophy celebration, podium finish, and
            focused tactical battle captured in full detail.
          </motion.p>

          {/* Quick Stats Pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 px-6 py-3 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-lg"
          >
            <div className="flex items-center gap-2">
              <Flame size={18} className="text-primary" />
              <span className="text-white font-extrabold text-sm sm:text-base">
                46+
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">Captured Moments</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-amber-400" />
              <span className="text-white font-extrabold text-sm sm:text-base">
                State & National
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">Championships</span>
            </div>
            <div className="w-px h-4 bg-white/10 hidden sm:block" />
            <div className="flex items-center gap-2">
              <Award size={18} className="text-primary" />
              <span className="text-white font-extrabold text-sm sm:text-base">
                100% Full View
              </span>
              <span className="text-gray-400 text-xs sm:text-sm">No Cropped Faces</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Filter Bar ── */}
      <section className="sticky top-20 md:top-24 z-30 px-6 py-4 backdrop-blur-xl bg-black/60 border-y border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "all", label: "All Moments", count: galleryData.length },
              {
                id: "championship",
                label: "Trophies & Champions",
                count: galleryData.filter((i) => i.category === "championship").length,
              },
              {
                id: "tournament",
                label: "Tournaments & Stage",
                count: galleryData.filter((i) => i.category === "tournament").length,
              },
              {
                id: "training",
                label: "Classroom & Focus",
                count: galleryData.filter((i) => i.category === "training").length,
              },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveCategory(tab.id as CategoryFilter);
                    setVisibleCount(12);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-gradient-to-r from-primary to-amber-600 text-black shadow-[0_0_20px_rgba(184,134,11,0.4)] scale-105"
                      : "bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 border border-white/5"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-black ${
                      isActive
                        ? "bg-black/30 text-black"
                        : "bg-white/10 text-gray-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Gallery Content Section ── */}
      <section className="pt-10 pb-28 px-4 sm:px-6">
        <div className="max-w-[92rem] mx-auto">
          {/* UNIFORM GRID: All photos in straight rows, no uneven/staggered heights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedPhotos.map((photo, idx) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "100px" }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
                onClick={() => openLightbox(photo.id)}
                className="group relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-black/90 border border-white/10 hover:border-primary/60 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(184,134,11,0.28)] hover:-translate-y-1.5 cursor-pointer flex flex-col"
              >
                {/* Photo Box: Uniform aspect ratio with object-contain so heads are NEVER cut off */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-950 flex items-center justify-center p-2">
                  {/* Subtle ambient blur of the same image */}
                  <img
                    src={photo.src}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-125 pointer-events-none"
                  />

                  {/* Main Sharp Image */}
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="relative z-10 max-w-full max-h-full w-auto h-auto object-contain rounded-xl transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Right Expand Button */}
                  <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                    <div className="w-8 h-8 rounded-full bg-black/75 backdrop-blur-md border border-primary/40 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-colors shadow-lg">
                      <Maximize2 size={14} />
                    </div>
                  </div>

                  {/* Center Hover Action */}
                  <div className="absolute inset-0 z-20 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="px-4 py-2 rounded-full bg-primary/95 text-black font-black text-xs tracking-wider uppercase flex items-center gap-2 shadow-[0_0_25px_rgba(184,134,11,0.6)] transform scale-90 group-hover:scale-100 transition-transform">
                      <Eye size={14} />
                      <span>Full View</span>
                    </div>
                  </div>
                </div>

                {/* Card Footer Info Bar: Clean, neat, perfectly uniform */}
                <div className="p-3.5 px-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between flex-grow">
                  <div className="min-w-0 pr-2">
                    <h4 className="text-white font-extrabold text-xs sm:text-sm truncate group-hover:text-primary transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-gray-400 text-[11px] truncate mt-0.5">
                      {photo.tagline}
                    </p>
                  </div>
                  <div className="shrink-0 w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-primary group-hover:border-primary/40 group-hover:bg-primary/10 transition-all">
                    <Maximize2 size={12} />
                  </div>
                </div>

                {/* Golden Highlight Rim on Hover */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl border border-primary/0 group-hover:border-primary/50 pointer-events-none transition-colors duration-500" />
              </motion.div>
            ))}
          </div>

          {/* ── Load More / Show All Buttons ── */}
          {visibleCount < filteredPhotos.length && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button
                onClick={() => setVisibleCount((prev) => Math.min(prev + 12, filteredPhotos.length))}
                className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-amber-600 text-black font-extrabold uppercase tracking-widest text-xs sm:text-sm rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
              >
                <ChevronDown className="group-hover:translate-y-1 transition-transform" size={18} />
                <span>
                  Load More ({filteredPhotos.length - visibleCount} Photos Left)
                </span>
              </button>

              <button
                onClick={() => setVisibleCount(filteredPhotos.length)}
                className="px-6 py-4 rounded-full border border-white/20 bg-white/5 text-gray-300 hover:text-white hover:border-primary/50 hover:bg-white/10 font-bold uppercase tracking-wider text-xs sm:text-sm transition-all"
              >
                View All {filteredPhotos.length} Photos
              </button>
            </motion.div>
          )}

          {/* All Photos Loaded Notification */}
          {visibleCount >= filteredPhotos.length && filteredPhotos.length > 0 && (
            <div className="mt-16 text-center text-gray-500 text-sm font-semibold tracking-wider uppercase">
              ✨ You have reached the end of this gallery category ✨
            </div>
          )}
        </div>
      </section>

      {/* ── Interactive Lightbox Modal (Full Uncropped Resolution) ── */}
      <AnimatePresence>
        {activePhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-2xl p-2 sm:p-4 md:p-6"
            onClick={closeLightbox}
          >
            {/* Modal Controls Header */}
            <div
              className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                  <Trophy size={18} />
                </div>
                <div>
                  <h4 className="text-white font-extrabold text-sm sm:text-base leading-tight">
                    {activePhoto.title}
                  </h4>
                  <p className="text-gray-400 text-xs">
                    Photo {selectedPhotoIndex! + 1} of {filteredPhotos.length}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleShare(activePhoto)}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                  title="Share Photo"
                >
                  {copiedLink ? <Check size={18} className="text-green-400" /> : <Share2 size={18} />}
                </button>
                <a
                  href={activePhoto.src}
                  download={`Glorious-Chess-${activePhoto.id}.jpeg`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all border border-white/10"
                  title="Download Photo"
                >
                  <Download size={18} />
                </a>
                <button
                  onClick={closeLightbox}
                  className="p-2.5 rounded-full bg-white/10 hover:bg-red-500/80 text-white transition-all border border-white/10 ml-2"
                  title="Close (Esc)"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevPhoto();
              }}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-primary hover:text-black border border-white/15 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl hover:scale-110"
              title="Previous Photo (←)"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNextPhoto();
              }}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-white/10 hover:bg-primary hover:text-black border border-white/15 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md shadow-2xl hover:scale-110"
              title="Next Photo (→)"
            >
              <ChevronRight size={26} />
            </button>

            {/* Modal Image Box */}
            <div
              className="relative max-w-5xl max-h-[78vh] sm:max-h-[82vh] flex items-center justify-center z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={activePhoto.id}
                src={activePhoto.src}
                alt={activePhoto.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-h-[78vh] sm:max-h-[82vh] max-w-full w-auto h-auto object-contain rounded-2xl border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Modal Footer Caption */}
            <div
              className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-center z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-amber-300 font-extrabold text-sm sm:text-base tracking-wide">
                {activePhoto.tagline}
              </p>
              <span className="text-gray-400 text-xs hidden sm:inline">
                Use Arrow Keys (← / →) to navigate • Press Esc to close
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
