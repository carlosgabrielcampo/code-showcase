import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Mail, ExternalLink, Linkedin, Calendar, Building2, GraduationCap, Award } from 'lucide-react';
import { PROFILE_DATA } from '@/config/profile';
import { useGitHubUser } from '@/hooks/useGitHub';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Tag } from '@/components/ui/Tag';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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

export default function Profile() {
  const { data: githubUser } = useGitHubUser();
  const profile = PROFILE_DATA;
  
  // Use GitHub avatar as fallback if no avatar specified
  const avatarUrl = profile.identity.avatarUrl || githubUser?.avatar_url || '';
  const initials = profile.identity.name.split(' ').map(n => n[0]).join('').toUpperCase();

  return (
    <>
      <Helmet>
        <title>{profile.identity.name} | Profile</title>
        <meta name="description" content={`${profile.identity.name} - ${profile.identity.headline}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/40 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Back to Projects</span>
            </Link>
            
            <Button asChild variant="outline" size="sm">
              <a 
                href={profile.identity.linkedInUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                View on LinkedIn
              </a>
            </Button>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-4xl">
          {/* Profile Header */}
          <section className="mb-8">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-primary/20 via-primary/10 to-accent/20" />
              <CardContent className="relative pt-0 pb-6">
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-end -mt-16 sm:-mt-12">
                  <Avatar className="w-32 h-32 border-4 border-background shadow-xl">
                    <AvatarImage src={avatarUrl} alt={profile.identity.name} />
                    <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
                      {initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 pt-4 sm:pt-0 sm:pb-2">
                    <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
                      {profile.identity.name}
                    </h1>
                    <p className="text-lg text-muted-foreground mt-1">
                      {profile.identity.headline}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-muted-foreground">
                      {profile.identity.location && (
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {profile.identity.location}
                        </span>
                      )}
                      {profile.identity.email && (
                        <a 
                          href={`mailto:${profile.identity.email}`}
                          className="flex items-center gap-1 hover:text-primary transition-colors"
                        >
                          <Mail className="w-4 h-4" />
                          {profile.identity.email}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* About */}
          <section className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">About</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {profile.about}
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Experience */}
          {profile.experience.length > 0 && (
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Experience
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {profile.experience.map((exp, index) => (
                    <div key={exp.id}>
                      {index > 0 && <Separator className="mb-6" />}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Building2 className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            {exp.companyUrl ? (
                              <a 
                                href={exp.companyUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-primary transition-colors flex items-center gap-1"
                              >
                                {exp.company}
                                <ExternalLink className="w-3 h-3" />
                              </a>
                            ) : (
                              <span>{exp.company}</span>
                            )}
                            {exp.location && (
                              <>
                                <span>•</span>
                                <span>{exp.location}</span>
                              </>
                            )}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                            <Calendar className="w-3 h-3" />
                            {formatDateRange(exp.startDate, exp.endDate)}
                          </div>
                          <p className="mt-3 text-muted-foreground whitespace-pre-line text-sm leading-relaxed">
                            {exp.description}
                          </p>
                          {exp.skills && exp.skills.length > 0 && (
                            <div className="flex flex-wrap gap-1.5 mt-3">
                              {exp.skills.map(skill => (
                                <Tag key={skill} variant="secondary" size="sm">
                                  {skill}
                                </Tag>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          )}

          {/* Education */}
          {profile.education.length > 0 && (
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {profile.education.map((edu, index) => (
                    <div key={edu.id}>
                      {index > 0 && <Separator className="mb-6" />}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <GraduationCap className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground">{edu.school}</h3>
                          <p className="text-muted-foreground">
                            {edu.degree} in {edu.field}
                          </p>
                          <p className="text-sm text-muted-foreground mt-1">
                            {edu.startYear} - {edu.endYear || 'Present'}
                          </p>
                          {edu.description && (
                            <p className="mt-2 text-sm text-muted-foreground">
                              {edu.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          )}

          {/* Skills */}
          {profile.skills.length > 0 && (
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Skills</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {profile.skills.map(skill => (
                      <Tag key={skill} variant="default" size="md">
                        {skill}
                      </Tag>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          )}

          {/* Certifications */}
          {profile.certifications && profile.certifications.length > 0 && (
            <section className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {profile.certifications.map((cert, index) => (
                    <div key={cert.id}>
                      {index > 0 && <Separator className="mb-4" />}
                      <div className="flex gap-4">
                        <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0">
                          <Award className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{cert.name}</h3>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Issued {cert.issueDate}
                          </p>
                          {cert.credentialUrl && (
                            <a 
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-primary hover:underline mt-1 inline-flex items-center gap-1"
                            >
                              Show credential
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          )}

          {/* Data Source Notice */}
          <footer className="text-center text-sm text-muted-foreground py-8">
            <p>
              Profile data sourced from local configuration. 
              <a 
                href={profile.identity.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline ml-1"
              >
                Verify on LinkedIn
              </a>
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}
