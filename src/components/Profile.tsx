import { Calendar, MapPin } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { Card, CardContent } from '@/components/ui/card';
import { FilterState } from '@/types/github';

export default function Profile({ page_text, filters, handleFilter }: { page_text: any; filters: FilterState, handleFilter: (newFilters: Partial<FilterState>) => void }) {
  function formatDateRange(startDate: string, endDate?: string): string {
    const formatDate = (date: string) => {
      const [year, month] = date.split('-');
      const monthNames = page_text.util.months;
      return `${monthNames[parseInt(month) - 1]} ${year}`;
    };

    const start = formatDate(startDate);
    const end = endDate ? formatDate(endDate) : page_text.util.now;
    return `${start} - ${end}`;
  }

  const profile = page_text.sections.experience.experiences
  return (
    <>
      {profile.length > 0 && (
        <div className="mb-8 flex flex-col gap-3">
          {profile.map((exp, index) => (
            <Card>
              <CardContent style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
                <div key={exp.id} className="flex flex-col" >
                  <div className='space-y-0 sm:space-y-1 '>
                    <div className="flex flex-col sm:flex-row items-center sm:gap-1 text-muted-foreground ">
                      <h3 className="text-foreground font-bold">{exp.title}</h3>
                      <a href={exp.companyUrl} about='_blank'>
                        <span className="text-sm hover:text-primary cursor-pointer">@{exp.company}</span>
                      </a>
                    </div>
                    <div className="min-w-0 flex flex-col sm:flex-row items-center sm:gap-1 text-muted-foreground text-sm">
                      <div className='flex items-center gap-1'>
                        <Calendar className="w-3 h-3" />
                        {formatDateRange(exp.startDate, exp.endDate)}
                      </div>
                      <div className='flex items-center gap-1' >
                        <span><MapPin className="w-3 h-3" /></span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                      {exp.description.map((item, index) => (
                        <li
                          key={`${exp.id}${index}`}
                          className="grid grid-cols-[12px_1fr] gap-3"
                        >
                          <div className="text-primary/80 leading-[1.6]">•</div>
                          <div className="leading-relaxed text-left text-sm">{item}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-3 sm:justify-start justify-center">
                      {exp.skills.map(skill =>
                        <Tag
                          className='cursor-pointer font-bold'
                          key={skill}
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            handleFilter({
                              topic: filters.topic.includes(skill.toLowerCase())
                                ? filters.topic.filter((e) => e.toLowerCase() !== skill.toLowerCase())
                                : [skill.toLowerCase(), ...filters.topic]
                            })
                          }}
                          active={filters.topic.includes(skill.toLowerCase())}
                        >
                          {skill.charAt(0).toUpperCase() + skill.slice(1)}
                        </Tag>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
