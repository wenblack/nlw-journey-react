import { useRouter } from "next/router";
import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function TripDetailsPage() {
  const router = useRouter();
  const id = router.query.id;

  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="flex w-full min-h-screen items-start md:items-center md:justify-center bg-zinc-950">
      <div
        className={`${inter.className} text-white bg-zinc-950 max-w-6xl px-6 py-10 mx-auto space-y-8 `}
      >
        <DestinationAndDateHeader />

        <main className="flex gap-16 px-4">
          <div className="flex-1 space-y-6">
            <div className="flex flex-wrap items-center sm:justify-center  gap-4 justify-between">
              <h2 className="text-3xl font-semibold">Atividades</h2>

              <button
                onClick={openCreateActivityModal}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                <Plus className="size-5" />
                Cadastrar atividade
              </button>
            </div>

            <Activities />
          </div>

          <div className="w-80 space-y-6">
            <ImportantLinks />

            <div className="w-full h-px bg-zinc-800" />

            <Guests />
          </div>
        </main>

        {isCreateActivityModalOpen && (
          <CreateActivityModal
            closeCreateActivityModal={closeCreateActivityModal}
          />
        )}
      </div>
    </div>
  );
}
