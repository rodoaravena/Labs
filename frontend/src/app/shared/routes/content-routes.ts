import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      breadcrumb: "Dashboard"
    }
  },
  {
    path: 'base',
    loadChildren: () => import('../../components/base/base.module').then(m => m.BaseModule),
    data: {
      breadcrumb: "Base"
    }
  },
  {
    path: 'advance',
    loadChildren: () => import('../../components/advance/advance.module').then(m => m.AdvanceModule),
    data: {
      breadcrumb: "Advance"
    }
  },
  {
    path: 'icons',
    loadChildren: () => import('../../components/icons/icons.module').then(m => m.IconsModule),
    data: {
      breadcrumb: "Icons"
    }
  },
  {
    path: 'buttons',
    loadChildren: () => import('../../components/buttons/buttons.module').then(m => m.ButtonsModule),
    data: {
      breadcrumb: "Buttons"
    }
  },
  {
    path: 'chart',
    loadChildren: () => import('../../components/charts/charts.module').then(m => m.ChartModule),
    data: {
      breadcrumb: "Chart"
    }
  },
  {
    path: 'cards',
    loadChildren: () => import('../../components/cards/cards.module').then(m => m.CardsModule),
    data: {
      breadcrumb: "Cards"
    }
  },
  {
    path: 'timeline',
    loadChildren: () => import('../../components/timeline/timeline.module').then(m => m.TimelineModule),
    data: {
      breadcrumb: "Timeline"
    }
  },
  {
    path: 'form',
    loadChildren: () => import('../../components/forms/forms.module').then(m => m.FormModule),
    data: {
      breadcrumb: "Form"
    }
  },
  {
    path: 'gallery',
    loadChildren: () => import('../../components/gallery/gallery.module').then(m => m.GalleryDemoModule),
    data: {
      breadcrumb: "Gallery"
    }
  },
  {
    path: 'table',
    loadChildren: () => import('../../components/tables/tables.module').then(m => m.TablesModule),
    data: {
      breadcrumb: "Table"
    }
  },
  {
    path: 'editor',
    loadChildren: () => import('../../components/editor/editor.module').then(m => m.EditorModule),
    data: {
      breadcrumb: "Editor"
    }
  },
  {
    path: 'users',
    loadChildren: () => import('../../components/users/users.module').then(m => m.UsersModule),
    data: {
      breadcrumb: "Users"
    }
  },
  {
    path: 'to-do',
    loadChildren: () => import('../../components/to-do/to-do.module').then(m => m.ToDoModule),
    data: {
      breadcrumb: "To-do"
    }
  },
  {
    path: 'email',
    loadChildren: () => import('../../components/email/email.module').then(m => m.EmailModule),
    data: {
      breadcrumb: "Email"
    }
  },
  {
    path: 'calender',
    loadChildren: () => import('../../components/calender/calender.module').then(m => m.CalenderModule),
    data: {
      breadcrumb: "Calender"
    }
  },
  {
    path: 'blog',
    loadChildren: () => import('../../components/blog/blog.module').then(m => m.BlogModule),
    data: {
      breadcrumb: "Blog"
    }
  },
  {
    path: 'social-app',
    loadChildren: () => import('../../components/social-app/social-app.module').then(m => m.SocialAppModule),
    data: {
      breadcrumb: "Social-app"
    }
  },
  {
    path: 'job-search',
    loadChildren: () => import('../../components/job-search/job-search.module').then(m => m.JobSearchModule),
    data: {
      breadcrumb: "Job-Search"
    }
  },
  {
    path: 'learning',
    loadChildren: () => import('../../components/learning/learning.module').then(m => m.LearningModule),
    data: {
      breadcrumb: "Learning"
    }
  },
  {
    path: 'faq',
    loadChildren: () => import('../../components/faq/faq.module').then(m => m.FaqModule),
    data: {
      breadcrumb: "Faq"
    }
  },
  {
    path: 'support-ticket',
    loadChildren: () => import('../../components/support-ticket/support-ticket.module').then(m => m.SupportTicketModule),
    data: {
      breadcrumb: "Support-Ticket"
    }
  },
  {
    path: 'pricing',
    loadChildren: () => import('../../components/pricing/pricing.module').then(m => m.PricingModule),
    data: {
      breadcrumb: "Pricing"
    }
  },
  {
    path: 'knowledgebase',
    loadChildren: () => import('../../components/knowledge-base/knowledge-base.module').then(m => m.KnowledgeBaseModule),
    data: {
      breadcrumb: "Knowledge-Base"
    }
  },
  {
    path: 'search-result',
    loadChildren: () => import('../../components/search-result/search-result.module').then(m => m.SearchResultModule),
    data: {
      breadcrumb: "Search-Result"
    }
  },
  {
    path: 'sample-page',
    loadChildren: () => import('../../components/sample-page/sample-page.module').then(m => m.SamplePageModule),
    data: {
      breadcrumb: "Sample-Page"
    }
  },
  {
    path: 'map',
    loadChildren: () => import('../../components/map/map.module').then(m => m.MapModule),
    data: {
      breadcrumb: "Map"
    }
  },
  {
    path: 'ui-elements',
    loadChildren: () => import('../../components/ui-elements/ui-elements.module').then(m => m.UiElementsModule),
    data: {
      breadcrumb: "UI-Elements"
    }
  },
  {
    path: 'widgets',
    loadChildren: () => import('../../components/widgets/widgets.module').then(m => m.WidgetsModule),
    data: {
      breadcrumb: "Widgets"
    }
  },
  {
    path: 'ecommerce',
    loadChildren: () => import('../../components/e-commerce/e-commerce.module').then(m => m.ECommerceModule),
    data: {
      breadcrumb: "Ecommerce"
    }
  },
  {
    path: 'chat',
    loadChildren: () => import('../../components/chat/chat.module').then(m => m.ChatModule),
    data: {
      breadcrumb: "Chat"
    }
  },
  {
    path: 'contact',
    loadChildren: () => import('../../components/contact/contact.module').then(m => m.ContactModule),
    data: {
      breadcrumb: "Contact"
    }
  },
  {
    path: 'to-do-firebase',
    loadChildren: () => import('../../components/to-do-firebase/to-do-firebase.module').then(m => m.ToDoFirebaseModule),
    data: {
      breadcrumb: "To-do"
    }
  },
];