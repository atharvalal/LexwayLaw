import Link from 'next/link'
import { ArrowRight, Layers3} from 'lucide-react'
import AdminSectionCard from '@/components/admin/AdminSectionCard'

type WebsiteSection = {
    id: number,
    name: String,
    page: String,
    editUrl: string,
    status: 'Published' | 'Draft'
}

const sections: WebsiteSection[] = [
    {
        id: 1,
        name: 'Hero',
        page: 'Home',
        editUrl: '/admin/sections/hero',
        status: 'Published'
    },
    {
        id: 2,
        name: 'About Us',
        page: 'About',
        editUrl: '/admin/sections/about-us',
        status: 'Published'

    },
    {
        
        id: 3,
        name: 'Practice Areas',
        page: 'Practice Areas',
        editUrl: '/admin/sections/practice-areas',
        status: 'Published'

    },
    {
        id: 4,
        name: 'Team Preview',
        page: 'Team',
        editUrl: '/admin/sections/team-preview',
        status: 'Draft'

    },
    
]

export default function AdminSectionsPage() {
    return (
      <AdminSectionCard
        title="Website Sections"
        eyebrow={`${sections.length} Sections`}
        description="View and manage individual sections used across the website."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.id}
              className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5"
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#08152f] text-white">
                  <Layers3 className="h-5 w-5" />
                </span>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    section.status === "Published"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {section.status}
                </span>
              </div>

              <h2 className="mt-6 text-lg font-medium text-slate-950">
                {section.name}
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Used on the {section.page} page
              </p>

              <Link
                href={section.editUrl}
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#12366d]"
              >
                Edit Section
                <ArrowRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </AdminSectionCard>
    );
}
