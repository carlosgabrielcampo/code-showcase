import { Calendar } from 'lucide-react';
import { Tag } from '@/components/ui/Tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ProfileData } from '@/types/profile';

function formatDateRange(startDate: string, endDate?: string): string {


  const formatDate = (date: string) => {
    const [year, month] = date.split('-');
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };
  
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} - ${end}`;
}

export default function Profile({ profile }: { profile: ProfileData }) {
  return (
    <>
      {profile.experience.length > 0 && (
        <div className="mb-8 flex flex-col gap-3">
          {profile.experience.map((exp, index) => (
            <Card>
              <CardContent style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}>
                <div key={exp.id} >
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <h3 className="text-foreground">{exp.title}</h3>
                    {
                      exp.companyUrl 
                        ? <a 
                            href={exp.companyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary text-sm transition-colors flex"
                          >
                            @{exp.company}
                          </a> 
                        : <span>@{exp.company}</span>
                    }
                  </div>
                  <div>
                    <div className="flex-1 min-w-0">                   
                      <div className="flex items-center gap-1 text-sm text-muted-foreground ">
                        <Calendar className="w-3 h-3" />
                        {formatDateRange(exp.startDate, exp.endDate)}
                        {exp.location && (
                            <>
                              <span>•</span>
                              <span>{exp.location}</span>
                            </>
                          )}
                      </div>
                      <ul className="text-muted-foreground text-sm leading-relaxed list-none mt-2 space-y-1">
                        {exp.description.map((item, index) => <li>
                          <span className='text-primary/80'>• </span><span className='left-0 before:top-1/2 before:-translate-y-1/2 before:h-2 before:w-2 before:rounded-full before:bg-primary/50' key={`${exp.id} item ${index}`}>{item}</span>
                        </li>
                      )}
                      </ul>
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {exp.skills.map(skill => <Tag key={skill} variant="outline" size="sm">{skill}</Tag>)}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
