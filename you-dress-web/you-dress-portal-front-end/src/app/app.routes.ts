import {Routes} from '@angular/router';
import {NotFoundComponent} from './common/not-found/not-found.component';
import {EcommerceComponent} from './dashboard/ecommerce/ecommerce.component';
import {ProjectManagementComponent} from './dashboard/project-management/project-management.component';
import {CrmComponent} from './dashboard/crm/crm.component';
import {LmsComponent} from './dashboard/lms/lms.component';
import {HelpDeskComponent} from './dashboard/help-desk/help-desk.component';
import {UiElementsComponent} from './ui-elements/ui-elements.component';
import {AlertsComponent} from './ui-elements/alerts/alerts.component';
import {AutocompleteComponent} from './ui-elements/autocomplete/autocomplete.component';
import {AvatarsComponent} from './ui-elements/avatars/avatars.component';
import {AccordionComponent} from './ui-elements/accordion/accordion.component';
import {BadgesComponent} from './ui-elements/badges/badges.component';
import {BreadcrumbComponent} from './ui-elements/breadcrumb/breadcrumb.component';
import {ButtonToggleComponent} from './ui-elements/button-toggle/button-toggle.component';
import {BottomSheetComponent} from './ui-elements/bottom-sheet/bottom-sheet.component';
import {ButtonsComponent} from './ui-elements/buttons/buttons.component';
import {CardsComponent} from './ui-elements/cards/cards.component';
import {CarouselsComponent} from './ui-elements/carousels/carousels.component';
import {CheckboxComponent} from './ui-elements/checkbox/checkbox.component';
import {ChipsComponent} from './ui-elements/chips/chips.component';
import {ClipboardComponent} from './ui-elements/clipboard/clipboard.component';
import {DatepickerComponent} from './ui-elements/datepicker/datepicker.component';
import {DialogComponent} from './ui-elements/dialog/dialog.component';
import {DividerComponent} from './ui-elements/divider/divider.component';
import {DragDropComponent} from './ui-elements/drag-drop/drag-drop.component';
import {ExpansionComponent} from './ui-elements/expansion/expansion.component';
import {FormFieldComponent} from './ui-elements/form-field/form-field.component';
import {GridListComponent} from './ui-elements/grid-list/grid-list.component';
import {InputComponent} from './ui-elements/input/input.component';
import {IconComponent} from './ui-elements/icon/icon.component';
import {ListComponent} from './ui-elements/list/list.component';
import {ListboxComponent} from './ui-elements/listbox/listbox.component';
import {MenusComponent} from './ui-elements/menus/menus.component';
import {PaginationComponent} from './ui-elements/pagination/pagination.component';
import {ProgressBarComponent} from './ui-elements/progress-bar/progress-bar.component';
import {RadioComponent} from './ui-elements/radio/radio.component';
import {RatioComponent} from './ui-elements/ratio/ratio.component';
import {SelectComponent} from './ui-elements/select/select.component';
import {SidenavComponent} from './ui-elements/sidenav/sidenav.component';
import {SlideToggleComponent} from './ui-elements/slide-toggle/slide-toggle.component';
import {SliderComponent} from './ui-elements/slider/slider.component';
import {SnackbarComponent} from './ui-elements/snackbar/snackbar.component';
import {StepperComponent} from './ui-elements/stepper/stepper.component';
import {TypographyComponent} from './ui-elements/typography/typography.component';
import {ToolbarComponent} from './ui-elements/toolbar/toolbar.component';
import {TableComponent} from './ui-elements/table/table.component';
import {TabsComponent} from './ui-elements/tabs/tabs.component';
import {TreeComponent} from './ui-elements/tree/tree.component';
import {VideosComponent} from './ui-elements/videos/videos.component';
import {UtilitiesComponent} from './ui-elements/utilities/utilities.component';
import {ColorPickerComponent} from './ui-elements/color-picker/color-picker.component';
import {TooltipComponent} from './ui-elements/tooltip/tooltip.component';
import {ToDoListComponent} from './apps/to-do-list/to-do-list.component';
import {CalendarComponent} from './apps/calendar/calendar.component';
import {ContactsComponent} from './apps/contacts/contacts.component';
import {ChatComponent} from './apps/chat/chat.component';
import {KanbanBoardComponent} from './apps/kanban-board/kanban-board.component';
import {FileManagerComponent} from './apps/file-manager/file-manager.component';
import {MyDriveComponent} from './apps/file-manager/my-drive/my-drive.component';
import {AssetsComponent} from './apps/file-manager/assets/assets.component';
import {ProjectsComponent} from './apps/file-manager/projects/projects.component';
import {PersonalComponent} from './apps/file-manager/personal/personal.component';
import {ApplicationsComponent} from './apps/file-manager/applications/applications.component';
import {DocumentsComponent} from './apps/file-manager/documents/documents.component';
import {MediaComponent} from './apps/file-manager/media/media.component';
import {EmailComponent} from './apps/email/email.component';
import {InboxComponent} from './apps/email/inbox/inbox.component';
import {ComposeComponent} from './apps/email/compose/compose.component';
import {ReadComponent} from './apps/email/read/read.component';
import {FormsComponent} from './forms/forms.component';
import {BasicElementsComponent} from './forms/basic-elements/basic-elements.component';
import {AdvancedElementsComponent} from './forms/advanced-elements/advanced-elements.component';
import {WizardComponent} from './forms/wizard/wizard.component';
import {EditorsComponent} from './forms/editors/editors.component';
import {FileUploaderComponent} from './forms/file-uploader/file-uploader.component';
import {DataTableComponent} from './tables/data-table/data-table.component';
import {BasicTableComponent} from './tables/basic-table/basic-table.component';
import {TablesComponent} from './tables/tables.component';
import {MoreChartsComponent} from './apexcharts/more-charts/more-charts.component';
import {PolarChartsComponent} from './apexcharts/polar-charts/polar-charts.component';
import {PieChartsComponent} from './apexcharts/pie-charts/pie-charts.component';
import {RadarChartsComponent} from './apexcharts/radar-charts/radar-charts.component';
import {RadialBarChartsComponent} from './apexcharts/radial-bar-charts/radial-bar-charts.component';
import {MixedChartsComponent} from './apexcharts/mixed-charts/mixed-charts.component';
import {ColumnChartsComponent} from './apexcharts/column-charts/column-charts.component';
import {AreaChartsComponent} from './apexcharts/area-charts/area-charts.component';
import {LineChartsComponent} from './apexcharts/line-charts/line-charts.component';
import {ApexchartsComponent} from './apexcharts/apexcharts.component';
import {WidgetsComponent} from './widgets/widgets.component';
import {InternalErrorComponent} from './common/internal-error/internal-error.component';
import {BlankPageComponent} from './blank-page/blank-page.component';
import {ComingSoonPageComponent} from './pages/coming-soon-page/coming-soon-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {TestimonialsPageComponent} from './pages/testimonials-page/testimonials-page.component';
import {GalleryPageComponent} from './pages/gallery-page/gallery-page.component';
import {TimelinePageComponent} from './pages/timeline-page/timeline-page.component';
import {TermsConditionsComponent} from './settings/terms-conditions/terms-conditions.component';
import {PrivacyPolicyComponent} from './settings/privacy-policy/privacy-policy.component';
import {ConnectionsComponent} from './settings/connections/connections.component';
import {ChangePasswordComponent} from './settings/change-password/change-password.component';
import {AccountSettingsComponent} from './settings/account-settings/account-settings.component';
import {SettingsComponent} from './settings/settings.component';
import {MyProfileComponent} from './my-profile/my-profile.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {ConfirmEmailComponent} from './authentication/confirm-email/confirm-email.component';
import {LockScreenComponent} from './authentication/lock-screen/lock-screen.component';
import {ResetPasswordComponent} from './authentication/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './authentication/forgot-password/forgot-password.component';
import {SignUpComponent} from './authentication/sign-up/sign-up.component';
import {SignInComponent} from './authentication/sign-in/sign-in.component';
import {AuthenticationComponent} from './authentication/authentication.component';
import {RemixiconComponent} from './icons/remixicon/remixicon.component';
import {MaterialSymbolsComponent} from './icons/material-symbols/material-symbols.component';
import {IconsComponent} from './icons/icons.component';
import {PProjectsComponent} from './pages/profile-page/p-projects/p-projects.component';
import {TeamsComponent} from './pages/profile-page/teams/teams.component';
import {UserProfileComponent} from './pages/profile-page/user-profile/user-profile.component';
import {ProfilePageComponent} from './pages/profile-page/profile-page.component';
import {AddUserComponent} from './pages/users-page/add-user/add-user.component';
import {UsersListComponent} from './pages/users-page/users-list/users-list.component';
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {MembersPageComponent} from './pages/members-page/members-page.component';
import {NotificationsPageComponent} from './pages/notifications-page/notifications-page.component';
import {MapsPageComponent} from './pages/maps-page/maps-page.component';
import {PricingPageComponent} from './pages/pricing-page/pricing-page.component';
import {FaqPageComponent} from './pages/faq-page/faq-page.component';
import {StarterComponent} from './starter/starter.component';
import {ProfileSettingsComponent} from './pages/social-page/profile-settings/profile-settings.component';
import {ActivityComponent} from './pages/social-page/profile/activity/activity.component';
import {AboutComponent} from './pages/social-page/profile/about/about.component';
import {TimelineComponent} from './pages/social-page/profile/timeline/timeline.component';
import {ProfileComponent} from './pages/social-page/profile/profile.component';
import {SocialPageComponent} from './pages/social-page/social-page.component';
import {InvoiceDetailsComponent} from './pages/invoices-page/invoice-details/invoice-details.component';
import {InvoicesComponent} from './pages/invoices-page/invoices/invoices.component';
import {InvoicesPageComponent} from './pages/invoices-page/invoices-page.component';
import {EditAnEventComponent} from './pages/events-page/edit-an-event/edit-an-event.component';
import {CreateAnEventComponent} from './pages/events-page/create-an-event/create-an-event.component';
import {EventDetailsComponent} from './pages/events-page/event-details/event-details.component';
import {EventsListComponent} from './pages/events-page/events-list/events-list.component';
import {EventsPageComponent} from './pages/events-page/events-page.component';
import {HdReportsComponent} from './pages/help-desk-page/hd-reports/hd-reports.component';
import {HdAgentsComponent} from './pages/help-desk-page/hd-agents/hd-agents.component';
import {HdTicketDetailsComponent} from './pages/help-desk-page/hd-ticket-details/hd-ticket-details.component';
import {HdTicketsComponent} from './pages/help-desk-page/hd-tickets/hd-tickets.component';
import {HelpDeskPageComponent} from './pages/help-desk-page/help-desk-page.component';
import {LInstructorsComponent} from './pages/lms-page/l-instructors/l-instructors.component';
import {LEditCourseComponent} from './pages/lms-page/l-edit-course/l-edit-course.component';
import {LCreateCourseComponent} from './pages/lms-page/l-create-course/l-create-course.component';
import {LCourseDetailsComponent} from './pages/lms-page/l-course-details/l-course-details.component';
import {LCoursesComponent} from './pages/lms-page/l-courses/l-courses.component';
import {LmsPageComponent} from './pages/lms-page/lms-page.component';
import {PmEditUserComponent} from './pages/project-management-page/pm-edit-user/pm-edit-user.component';
import {PmCreateUserComponent} from './pages/project-management-page/pm-create-user/pm-create-user.component';
import {PmUsersComponent} from './pages/project-management-page/pm-users/pm-users.component';
import {PmKanbanBoardComponent} from './pages/project-management-page/pm-kanban-board/pm-kanban-board.component';
import {PmTeamsComponent} from './pages/project-management-page/pm-teams/pm-teams.component';
import {PmClientsComponent} from './pages/project-management-page/pm-clients/pm-clients.component';
import {PmCreateProjectComponent} from './pages/project-management-page/pm-create-project/pm-create-project.component';
import {PmProjectsListComponent} from './pages/project-management-page/pm-projects-list/pm-projects-list.component';
import {
  PmProjectOverviewComponent
} from './pages/project-management-page/pm-project-overview/pm-project-overview.component';
import {ProjectManagementPageComponent} from './pages/project-management-page/project-management-page.component';
import {CCreateDealComponent} from './pages/crm-page/c-create-deal/c-create-deal.component';
import {CDealsComponent} from './pages/crm-page/c-deals/c-deals.component';
import {CLeadsComponent} from './pages/crm-page/c-leads/c-leads.component';
import {CEditLeadComponent} from './pages/crm-page/c-edit-lead/c-edit-lead.component';
import {CCreateLeadComponent} from './pages/crm-page/c-create-lead/c-create-lead.component';
import {CCustomersComponent} from './pages/crm-page/c-customers/c-customers.component';
import {CEditContactComponent} from './pages/crm-page/c-edit-contact/c-edit-contact.component';
import {CCreateContactComponent} from './pages/crm-page/c-create-contact/c-create-contact.component';
import {CContactsComponent} from './pages/crm-page/c-contacts/c-contacts.component';
import {CrmPageComponent} from './pages/crm-page/crm-page.component';
import {EReviewsComponent} from './pages/ecommerce-page/e-reviews/e-reviews.component';
import {EEditCategoryComponent} from './pages/ecommerce-page/e-edit-category/e-edit-category.component';
import {ECreateCategoryComponent} from './pages/ecommerce-page/e-create-category/e-create-category.component';
import {ECategoriesComponent} from './pages/ecommerce-page/e-categories/e-categories.component';
import {ERefundsComponent} from './pages/ecommerce-page/e-refunds/e-refunds.component';
import {ECreateSellerComponent} from './pages/ecommerce-page/e-create-seller/e-create-seller.component';
import {ESellerDetailsComponent} from './pages/ecommerce-page/e-seller-details/e-seller-details.component';
import {ESellersComponent} from './pages/ecommerce-page/e-sellers/e-sellers.component';
import {ECheckoutComponent} from './pages/ecommerce-page/e-checkout/e-checkout.component';
import {ECartComponent} from './pages/ecommerce-page/e-cart/e-cart.component';
import {ECustomerDetailsComponent} from './pages/ecommerce-page/e-customer-details/e-customer-details.component';
import {ECustomersComponent} from './pages/ecommerce-page/e-customers/e-customers.component';
import {EOrderTrackingComponent} from './pages/ecommerce-page/e-order-tracking/e-order-tracking.component';
import {ECreateOrderComponent} from './pages/ecommerce-page/e-create-order/e-create-order.component';
import {EOrderDetailsComponent} from './pages/ecommerce-page/e-order-details/e-order-details.component';
import {EOrdersComponent} from './pages/ecommerce-page/e-orders/e-orders.component';
import {EEditProductComponent} from './pages/ecommerce-page/e-edit-product/e-edit-product.component';
import {ECreateProductComponent} from './pages/ecommerce-page/e-create-product/e-create-product.component';
import {EProductDetailsComponent} from './pages/ecommerce-page/e-product-details/e-product-details.component';
import {EProductsListComponent} from './pages/ecommerce-page/e-products-list/e-products-list.component';
import {EProductsGridComponent} from './pages/ecommerce-page/e-products-grid/e-products-grid.component';
import {EcommercePageComponent} from './pages/ecommerce-page/ecommerce-page.component';
import {TeamMembersComponent} from './pages/users-page/team-members/team-members.component';
import {CallbackComponent} from "./authentication/callback/callback.component";
import {AuthGuard} from "./auth-guard.service";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/sign-in',
    pathMatch: 'full'
  },

  {path: 'ecommerce', component: EcommerceComponent, canActivate: [AuthGuard]},
  {path: 'crm', component: CrmComponent, canActivate: [AuthGuard]},
  {path: 'project-management', component: ProjectManagementComponent, canActivate: [AuthGuard]},
  {path: 'lms', component: LmsComponent, canActivate: [AuthGuard]},
  {path: 'help-desk', component: HelpDeskComponent, canActivate: [AuthGuard]},
  {path: 'to-do-list', component: ToDoListComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarComponent, canActivate: [AuthGuard]},
  {path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]},
  {path: 'chat', component: ChatComponent, canActivate: [AuthGuard]},
  {path: 'kanban-board', component: KanbanBoardComponent, canActivate: [AuthGuard]},
  {
    path: 'file-manager',
    component: FileManagerComponent,
    children: [
      {path: '', component: MyDriveComponent, canActivate: [AuthGuard]},
      {path: 'assets', component: AssetsComponent, canActivate: [AuthGuard]},
      {path: 'projects', component: ProjectsComponent, canActivate: [AuthGuard]},
      {path: 'personal', component: PersonalComponent, canActivate: [AuthGuard]},
      {path: 'applications', component: ApplicationsComponent, canActivate: [AuthGuard]},
      {path: 'documents', component: DocumentsComponent, canActivate: [AuthGuard]},
      {path: 'media', component: MediaComponent}
    ]
  },
  {
    path: 'email',
    component: EmailComponent,
    children: [
      {path: '', component: InboxComponent, canActivate: [AuthGuard]},
      {path: 'compose', component: ComposeComponent, canActivate: [AuthGuard]},
      {path: 'read', component: ReadComponent}
    ]

  },
  {
    path: 'ecommerce-page',
    component: EcommercePageComponent,
    children: [
      {path: '', component: EProductsGridComponent, canActivate: [AuthGuard]},
      {path: 'products-list', component: EProductsListComponent, canActivate: [AuthGuard]},
      {path: 'product-details', component: EProductDetailsComponent, canActivate: [AuthGuard]},
      {path: 'create-product', component: ECreateProductComponent, canActivate: [AuthGuard]},
      {path: 'edit-product', component: EEditProductComponent, canActivate: [AuthGuard]},
      {path: 'orders', component: EOrdersComponent, canActivate: [AuthGuard]},
      {path: 'order-details', component: EOrderDetailsComponent, canActivate: [AuthGuard]},
      {path: 'create-order', component: ECreateOrderComponent, canActivate: [AuthGuard]},
      {path: 'order-tracking', component: EOrderTrackingComponent, canActivate: [AuthGuard]},
      {path: 'customers', component: ECustomersComponent, canActivate: [AuthGuard]},
      {path: 'customer-details', component: ECustomerDetailsComponent, canActivate: [AuthGuard]},
      {path: 'cart', component: ECartComponent, canActivate: [AuthGuard]},
      {path: 'checkout', component: ECheckoutComponent, canActivate: [AuthGuard]},
      {path: 'sellers', component: ESellersComponent, canActivate: [AuthGuard]},
      {path: 'seller-details', component: ESellerDetailsComponent, canActivate: [AuthGuard]},
      {path: 'create-seller', component: ECreateSellerComponent, canActivate: [AuthGuard]},
      {path: 'refunds', component: ERefundsComponent, canActivate: [AuthGuard]},
      {path: 'categories', component: ECategoriesComponent, canActivate: [AuthGuard]},
      {path: 'create-category', component: ECreateCategoryComponent, canActivate: [AuthGuard]},
      {path: 'edit-category', component: EEditCategoryComponent, canActivate: [AuthGuard]},
      {path: 'reviews', component: EReviewsComponent}
    ]

  },
  {
    path: 'crm-page',
    component: CrmPageComponent,
    children: [
      {path: '', component: CContactsComponent, canActivate: [AuthGuard]},
      {path: 'create-contact', component: CCreateContactComponent, canActivate: [AuthGuard]},
      {path: 'edit-contact', component: CEditContactComponent, canActivate: [AuthGuard]},
      {path: 'customers', component: CCustomersComponent, canActivate: [AuthGuard]},
      {path: 'create-lead', component: CCreateLeadComponent, canActivate: [AuthGuard]},
      {path: 'edit-lead', component: CEditLeadComponent, canActivate: [AuthGuard]},
      {path: 'leads', component: CLeadsComponent, canActivate: [AuthGuard]},
      {path: 'deals', component: CDealsComponent, canActivate: [AuthGuard]},
      {path: 'create-deal', component: CCreateDealComponent}
    ]

  },
  {
    path: 'project-management-page',
    component: ProjectManagementPageComponent,
    children: [
      {path: '', component: PmProjectOverviewComponent, canActivate: [AuthGuard]},
      {path: 'projects-list', component: PmProjectsListComponent, canActivate: [AuthGuard]},
      {path: 'create-project', component: PmCreateProjectComponent, canActivate: [AuthGuard]},
      {path: 'clients', component: PmClientsComponent, canActivate: [AuthGuard]},
      {path: 'teams', component: PmTeamsComponent, canActivate: [AuthGuard]},
      {path: 'kanban-board', component: PmKanbanBoardComponent, canActivate: [AuthGuard]},
      {path: 'users', component: PmUsersComponent, canActivate: [AuthGuard]},
      {path: 'create-user', component: PmCreateUserComponent, canActivate: [AuthGuard]},
      {path: 'edit-user', component: PmEditUserComponent}
    ]

  },
  {
    path: 'lms-page',
    component: LmsPageComponent,
    children: [
      {path: '', component: LCoursesComponent, canActivate: [AuthGuard]},
      {path: 'course-details', component: LCourseDetailsComponent, canActivate: [AuthGuard]},
      {path: 'create-course', component: LCreateCourseComponent, canActivate: [AuthGuard]},
      {path: 'edit-course', component: LEditCourseComponent, canActivate: [AuthGuard]},
      {path: 'instructors', component: LInstructorsComponent}
    ]

  },
  {
    path: 'help-desk-page',
    component: HelpDeskPageComponent,
    children: [
      {path: '', component: HdTicketsComponent, canActivate: [AuthGuard]},
      {path: 'ticket-details', component: HdTicketDetailsComponent, canActivate: [AuthGuard]},
      {path: 'agents', component: HdAgentsComponent, canActivate: [AuthGuard]},
      {path: 'reports', component: HdReportsComponent}
    ]

  },
  {
    path: 'events',
    component: EventsPageComponent,
    children: [
      {path: '', component: EventsListComponent, canActivate: [AuthGuard]},
      {path: 'event-details', component: EventDetailsComponent, canActivate: [AuthGuard]},
      {path: 'create-an-event', component: CreateAnEventComponent, canActivate: [AuthGuard]},
      {path: 'edit-an-event', component: EditAnEventComponent}
    ]

  },
  {
    path: 'invoices',
    component: InvoicesPageComponent,
    children: [
      {path: '', component: InvoicesComponent, canActivate: [AuthGuard]},
      {path: 'invoice-details', component: InvoiceDetailsComponent, canActivate: [AuthGuard]},
    ]

  },
  {
    path: 'social',
    component: SocialPageComponent,
    children: [
      {
        path: '',
        component: ProfileComponent,
        children: [
          {path: '', component: TimelineComponent, canActivate: [AuthGuard]},
          {path: 'about', component: AboutComponent, canActivate: [AuthGuard]},
          {path: 'activity', component: ActivityComponent}
        ]

      },
      {path: 'settings', component: ProfileSettingsComponent}
    ]

  },
  {path: 'starter', component: StarterComponent, canActivate: [AuthGuard]},
  {path: 'faq', component: FaqPageComponent, canActivate: [AuthGuard]},
  {path: 'pricing', component: PricingPageComponent, canActivate: [AuthGuard]},
  {path: 'maps', component: MapsPageComponent, canActivate: [AuthGuard]},
  {path: 'notifications', component: NotificationsPageComponent, canActivate: [AuthGuard]},
  {path: 'members', component: MembersPageComponent, canActivate: [AuthGuard]},
  {
    path: 'users',
    component: UsersPageComponent,
    children: [
      {path: '', component: TeamMembersComponent, canActivate: [AuthGuard]},
      {path: 'users-list', component: UsersListComponent, canActivate: [AuthGuard]},
      {path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard]},
    ]

  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    children: [
      {path: '', component: UserProfileComponent, canActivate: [AuthGuard]},
      {path: 'teams', component: TeamsComponent, canActivate: [AuthGuard]},
      {path: 'projects', component: PProjectsComponent, canActivate: [AuthGuard]},
    ]

  },
  {
    path: 'icons',
    component: IconsComponent,
    children: [
      {path: '', component: MaterialSymbolsComponent, canActivate: [AuthGuard]},
      {path: 'remixicon', component: RemixiconComponent}
    ]

  },
  {
    path: 'authentication',
    component: AuthenticationComponent,
    children: [
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'reset-password', component: ResetPasswordComponent},
      {path: 'lock-screen', component: LockScreenComponent},
      {path: 'confirm-email', component: ConfirmEmailComponent},
      {path: 'logout', component: LogoutComponent},
      {path: 'callback', component: CallbackComponent}
    ]

  },
  {path: 'my-profile', component: MyProfileComponent, canActivate: [AuthGuard]},
  {
    path: 'settings',
    component: SettingsComponent,
    children: [
      {path: '', component: AccountSettingsComponent, canActivate: [AuthGuard]},
      {path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthGuard]},
      {path: 'connections', component: ConnectionsComponent, canActivate: [AuthGuard]},
      {path: 'privacy-policy', component: PrivacyPolicyComponent, canActivate: [AuthGuard]},
      {path: 'terms-conditions', component: TermsConditionsComponent}
    ]

  },
  {path: 'timeline', component: TimelinePageComponent, canActivate: [AuthGuard]},
  {path: 'gallery', component: GalleryPageComponent, canActivate: [AuthGuard]},
  {path: 'testimonials', component: TestimonialsPageComponent, canActivate: [AuthGuard]},
  {path: 'search', component: SearchPageComponent, canActivate: [AuthGuard]},
  {path: 'coming-soon', component: ComingSoonPageComponent, canActivate: [AuthGuard]},
  {path: 'blank-page', component: BlankPageComponent, canActivate: [AuthGuard]},
  {path: 'internal-error', component: InternalErrorComponent, canActivate: [AuthGuard]},
  {path: 'widgets', component: WidgetsComponent, canActivate: [AuthGuard]},
  {
    path: 'charts',
    component: ApexchartsComponent,
    children: [
      {path: '', component: LineChartsComponent, canActivate: [AuthGuard]},
      {path: 'area', component: AreaChartsComponent, canActivate: [AuthGuard]},
      {path: 'column', component: ColumnChartsComponent, canActivate: [AuthGuard]},
      {path: 'mixed', component: MixedChartsComponent, canActivate: [AuthGuard]},
      {path: 'radialbar', component: RadialBarChartsComponent, canActivate: [AuthGuard]},
      {path: 'radar', component: RadarChartsComponent, canActivate: [AuthGuard]},
      {path: 'pie', component: PieChartsComponent, canActivate: [AuthGuard]},
      {path: 'polar', component: PolarChartsComponent, canActivate: [AuthGuard]},
      {path: 'more', component: MoreChartsComponent}
    ]

  },
  {
    path: 'tables',
    component: TablesComponent,
    children: [
      {path: '', component: BasicTableComponent, canActivate: [AuthGuard]},
      {path: 'data-table', component: DataTableComponent, canActivate: [AuthGuard]},
    ]

  },
  {
    path: 'ui-kit',
    component: UiElementsComponent,
    children: [
      {path: '', component: AlertsComponent, canActivate: [AuthGuard]},
      {path: 'autocomplete', component: AutocompleteComponent, canActivate: [AuthGuard]},
      {path: 'avatars', component: AvatarsComponent, canActivate: [AuthGuard]},
      {path: 'accordion', component: AccordionComponent, canActivate: [AuthGuard]},
      {path: 'badges', component: BadgesComponent, canActivate: [AuthGuard]},
      {path: 'breadcrumb', component: BreadcrumbComponent, canActivate: [AuthGuard]},
      {path: 'button-toggle', component: ButtonToggleComponent, canActivate: [AuthGuard]},
      {path: 'bottom-sheet', component: BottomSheetComponent, canActivate: [AuthGuard]},
      {path: 'buttons', component: ButtonsComponent, canActivate: [AuthGuard]},
      {path: 'cards', component: CardsComponent, canActivate: [AuthGuard]},
      {path: 'carousels', component: CarouselsComponent, canActivate: [AuthGuard]},
      {path: 'checkbox', component: CheckboxComponent, canActivate: [AuthGuard]},
      {path: 'chips', component: ChipsComponent, canActivate: [AuthGuard]},
      {path: 'color-picker', component: ColorPickerComponent, canActivate: [AuthGuard]},
      {path: 'clipboard', component: ClipboardComponent, canActivate: [AuthGuard]},
      {path: 'datepicker', component: DatepickerComponent, canActivate: [AuthGuard]},
      {path: 'dialog', component: DialogComponent, canActivate: [AuthGuard]},
      {path: 'divider', component: DividerComponent, canActivate: [AuthGuard]},
      {path: 'drag-drop', component: DragDropComponent, canActivate: [AuthGuard]},
      {path: 'expansion', component: ExpansionComponent, canActivate: [AuthGuard]},
      {path: 'form-field', component: FormFieldComponent, canActivate: [AuthGuard]},
      {path: 'grid-list', component: GridListComponent, canActivate: [AuthGuard]},
      {path: 'input', component: InputComponent, canActivate: [AuthGuard]},
      {path: 'icon', component: IconComponent, canActivate: [AuthGuard]},
      {path: 'list', component: ListComponent, canActivate: [AuthGuard]},
      {path: 'listbox', component: ListboxComponent, canActivate: [AuthGuard]},
      {path: 'menus', component: MenusComponent, canActivate: [AuthGuard]},
      {path: 'pagination', component: PaginationComponent, canActivate: [AuthGuard]},
      {path: 'progress-bar', component: ProgressBarComponent, canActivate: [AuthGuard]},
      {path: 'radio', component: RadioComponent, canActivate: [AuthGuard]},
      {path: 'ratio', component: RatioComponent, canActivate: [AuthGuard]},
      {path: 'select', component: SelectComponent, canActivate: [AuthGuard]},
      {path: 'sidenav', component: SidenavComponent, canActivate: [AuthGuard]},
      {path: 'slide-toggle', component: SlideToggleComponent, canActivate: [AuthGuard]},
      {path: 'slider', component: SliderComponent, canActivate: [AuthGuard]},
      {path: 'snackbar', component: SnackbarComponent, canActivate: [AuthGuard]},
      {path: 'stepper', component: StepperComponent, canActivate: [AuthGuard]},
      {path: 'typography', component: TypographyComponent, canActivate: [AuthGuard]},
      {path: 'tooltip', component: TooltipComponent, canActivate: [AuthGuard]},
      {path: 'toolbar', component: ToolbarComponent, canActivate: [AuthGuard]},
      {path: 'table', component: TableComponent, canActivate: [AuthGuard]},
      {path: 'tabs', component: TabsComponent, canActivate: [AuthGuard]},
      {path: 'tree', component: TreeComponent, canActivate: [AuthGuard]},
      {path: 'videos', component: VideosComponent, canActivate: [AuthGuard]},
      {path: 'utilities', component: UtilitiesComponent, canActivate: [AuthGuard]},
    ]

  },
  {
    path: 'forms',
    component: FormsComponent,
    children: [
      {path: '', component: BasicElementsComponent, canActivate: [AuthGuard]},
      {path: 'advanced-elements', component: AdvancedElementsComponent, canActivate: [AuthGuard]},
      {path: 'wizard', component: WizardComponent, canActivate: [AuthGuard]},
      {path: 'editors', component: EditorsComponent, canActivate: [AuthGuard]},
      {path: 'file-uploader', component: FileUploaderComponent, canActivate: [AuthGuard]},
    ]

  },
  // Here add new pages component

  {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];
