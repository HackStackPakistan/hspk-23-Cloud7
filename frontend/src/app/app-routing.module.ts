import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AiStartupComponent } from './components/pages/ai-startup/ai-startup.component';
import { MachineLearningComponent } from './components/pages/machine-learning/machine-learning.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';

const routes: Routes = [
    {path: '', component: AiStartupComponent},
    // {path: 'ai-startup', component: AiStartupComponent},
    {path: 'machine-learning', component: MachineLearningComponent},
    {path: 'about', component: AboutComponent},
    {path: 'team', component: TeamComponent},
    {path: 'pricing', component: PricingComponent},
    {path: 'faq', component: FaqComponent},
    // {path: 'testimonials', component: TestimonialsComponent},
    // {path: 'case-study', component: CaseStudyComponent},
    // {path: 'case-study-details', component: CaseStudyDetailsComponent},
    {path: 'error', component: ErrorComponent},
    {path: 'sign-in', component: SignInComponent},
    {path: 'sign-up', component: SignUpComponent},
    {path: 'terms-conditions', component: TermsConditionsComponent},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    // {path: 'coming-soon', component: ComingSoonComponent},
    // {path: 'services', component: ServicesComponent},
    // {path: 'services-details', component: ServicesDetailsComponent},
    // {path: 'blog', component: BlogComponent},
    // {path: 'blog-details', component: BlogDetailsComponent},
    {path: 'contact', component: ContactComponent},
    

    {path: '**', component: ErrorComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }