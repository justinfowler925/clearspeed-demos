import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { HomePage } from '@/app/components/HomePage';
import { AutoInsurancePage } from '@/app/components/AutoInsurancePage';
import { HomeInsurancePage } from '@/app/components/HomeInsurancePage';
import { ClaimsTypePage } from '@/app/components/ClaimsTypePage';
import { TheftClaimForm } from '@/app/components/TheftClaimForm';
import { QuestionnairePage } from '@/app/components/QuestionnairePage';
import { QuoteForm } from '@/app/components/QuoteForm';
import { QuoteResults } from '@/app/components/QuoteResults';
import { ApplicationQuestionnaire } from '@/app/components/ApplicationQuestionnaire';
import { HomeQuoteForm } from '@/app/components/HomeQuoteForm';
import { HomeQuoteResults } from '@/app/components/HomeQuoteResults';
import { HomeApplicationQuestionnaire } from '@/app/components/HomeApplicationQuestionnaire';
import { HomeClaimForm } from '@/app/components/HomeClaimForm';
import { HomeClaimQuestionnaire } from '@/app/components/HomeClaimQuestionnaire';
import { LifeInsurancePage } from '@/app/components/LifeInsurancePage';
import { LifeQuoteForm } from '@/app/components/LifeQuoteForm';
import { LifeQuoteResults } from '@/app/components/LifeQuoteResults';
import { LifeApplicationQuestionnaire } from '@/app/components/LifeApplicationQuestionnaire';
import { WorkersCompPage } from '@/app/components/WorkersCompPage';
import { PremiumAuditForm } from '@/app/components/PremiumAuditForm';
import { PremiumAuditQuestionnaire } from '@/app/components/PremiumAuditQuestionnaire';

type Page = 'home' | 'auto' | 'home-insurance' | 'life-insurance' | 'workers-comp' | 'claims-type' | 'theft-claim' | 'questionnaire' | 'quote' | 'quote-results' | 'application-questionnaire' | 'home-quote' | 'home-quote-results' | 'home-application-questionnaire' | 'home-claim' | 'home-claim-questionnaire' | 'life-quote' | 'life-quote-results' | 'life-application-questionnaire' | 'premium-audit' | 'premium-audit-questionnaire';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'auto' && <AutoInsurancePage onNavigate={handleNavigate} />}
      {currentPage === 'home-insurance' && <HomeInsurancePage onNavigate={handleNavigate} />}
      {currentPage === 'claims-type' && <ClaimsTypePage onNavigate={handleNavigate} />}
      {currentPage === 'theft-claim' && <TheftClaimForm onNavigate={handleNavigate} />}
      {currentPage === 'questionnaire' && <QuestionnairePage onNavigate={handleNavigate} />}
      {currentPage === 'quote' && <QuoteForm onNavigate={handleNavigate} />}
      {currentPage === 'quote-results' && <QuoteResults onNavigate={handleNavigate} />}
      {currentPage === 'application-questionnaire' && <ApplicationQuestionnaire onNavigate={handleNavigate} />}
      {currentPage === 'home-quote' && <HomeQuoteForm onNavigate={handleNavigate} />}
      {currentPage === 'home-quote-results' && <HomeQuoteResults onNavigate={handleNavigate} />}
      {currentPage === 'home-application-questionnaire' && <HomeApplicationQuestionnaire onNavigate={handleNavigate} />}
      {currentPage === 'home-claim' && <HomeClaimForm onNavigate={handleNavigate} />}
      {currentPage === 'home-claim-questionnaire' && <HomeClaimQuestionnaire onNavigate={handleNavigate} />}
      {currentPage === 'life-insurance' && <LifeInsurancePage onNavigate={handleNavigate} />}
      {currentPage === 'life-quote' && <LifeQuoteForm onNavigate={handleNavigate} />}
      {currentPage === 'life-quote-results' && <LifeQuoteResults onNavigate={handleNavigate} />}
      {currentPage === 'life-application-questionnaire' && <LifeApplicationQuestionnaire onNavigate={handleNavigate} />}
      {currentPage === 'workers-comp' && <WorkersCompPage onNavigate={handleNavigate} />}
      {currentPage === 'premium-audit' && <PremiumAuditForm onNavigate={handleNavigate} />}
      {currentPage === 'premium-audit-questionnaire' && <PremiumAuditQuestionnaire onNavigate={handleNavigate} />}
    </div>
  );
}