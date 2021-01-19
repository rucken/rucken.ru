import { ModuleModel } from '../../models/module.model';

export const RUCKEN_TODO_MODULE = new ModuleModel({
  title: 'Rucken: Todo',
  name: 'rucken-todo',
  tags: ['angular', 'nx', 'ionic', 'bootstrap', 'nestjs'],
  description: `Simple todo manager with projects and tasks`,
  images: [
    {
      description: 'Web: Projects page for guests',
      src: 'assets/rucken-todo/web/rucken-todo-web-projects.png',
    },
    {
      description: 'Web: Modal for view project',
      src: 'assets/rucken-todo/web/rucken-todo-web-projects-view.png',
    },
    {
      description: 'Web: Projects page',
      src: 'assets/rucken-todo/web/rucken-todo-web-projects-manage.png',
    },
    {
      description: 'Web: Modal for update project',
      src: 'assets/rucken-todo/web/rucken-todo-web-project-update.png',
    },
    {
      description: 'Web: Add user to project modal',
      src: 'assets/rucken-todo/web/rucken-todo-web-project-update-add-user.png',
    },
    {
      description: 'Web: Modal for view task',
      src: 'assets/rucken-todo/web/rucken-todo-web-tasks-view.png',
    },
    {
      description: 'Web: Modal for update task',
      src: 'assets/rucken-todo/web/rucken-todo-web-tasks-update.png',
    },
    {
      description: 'Ionic: Home page',
      src: 'assets/rucken-todo/ionic/rucken-todo-ionic-home-page.png',
    },
    {
      description: 'Ionic: Projects page',
      src: 'assets/rucken-todo/ionic/rucken-todo-ionic-projects-page.png',
    },
    {
      description: 'Ionic: Modal for add project',
      src: 'assets/rucken-todo/ionic/rucken-todo-ionic-projects-add-modal.png',
    },
    {
      description: 'Ionic: Tasks of project',
      src:
        'assets/rucken-todo/ionic/rucken-todo-ionic-tasks-of-project-page.png',
    },
    {
      description: 'Ionic: Filter modal for tasks',
      src:
        'assets/rucken-todo/ionic/rucken-todo-ionic-filter-modal-for-tasks-of-project.png',
    },
    {
      description: 'Ionic: User assign modal for task',
      src:
        'assets/rucken-todo/ionic/rucken-todo-ionic-assign-user-to-task-modal.png',
    },
    {
      description: 'Ionic: Select languages',
      src:
        'assets/rucken-todo/ionic/rucken-todo-ionic-select-language-modal.png',
    },
    {
      description: 'NestJS: Start page with README.md',
      src: 'assets/rucken-todo/nestjs/rucken-todo-nestjs-home-page.png',
    },
    {
      description: 'NestJS: Swagger page',
      src: 'assets/rucken-todo/nestjs/rucken-todo-nestjs-swagger-page.png',
    },
    {
      description: 'NestJS: Project DTO',
      src: 'assets/rucken-todo/nestjs/rucken-todo-nestjs-project-dto.png',
    },
    {
      description: 'NestJS: Typedoc page',
      src: 'assets/rucken-todo/nestjs/rucken-todo-nestjs-typedoc-page.png',
    },
  ],
  features: [
    {
      description: 'Creating and editing projects',
    },
    {
      description: 'Private and public projects',
    },
    {
      description: 'Creating and editing statuses for projects',
    },
    {
      description: 'Creating and editing project tasks',
    },
    {
      description: 'Assign users to tasks',
    },
  ],
  demos: [
    {
      buttonClass: 'btn-bootstrap',
      title: 'Online on Web',
      url: 'https://rucken.github.io/todo',
    },
    {
      buttonClass: 'btn-ionic',
      title: 'Online on Ionic',
      url: 'https://rucken.github.io/todo-ionic',
    },
    {
      buttonClass: 'btn-nestjs',
      title: 'Online for NestJS',
      url: 'https://todo-nestjs.rucken.ru/',
    },
    {
      title: 'Application for Android',
      url: 'https://rucken.github.io/todo-ionic/rucken-todo-ionic.apk',
    },
  ],
  sources: [
    {
      buttonClass: 'btn-bootstrap',
      title: 'Source for Core + Web on Bootstrap',
      url: 'https://github.com/rucken/todo',
    },
    {
      buttonClass: 'btn-ionic',
      title: 'Source for Ionic',
      url: 'https://github.com/rucken/todo-ionic',
    },
    {
      buttonClass: 'btn-nestjs',
      title: 'Source for NestJS',
      url: 'https://github.com/rucken/todo-nestjs',
    },
  ],
  packages: [
    {
      title: '@rucken/todo-core',
      url: 'https://npmjs.org/package/@rucken/todo-core',
    },
    {
      buttonClass: 'btn-bootstrap',
      title: '@rucken/todo-web',
      url: 'https://npmjs.org/package/@rucken/todo-web',
    },
    {
      buttonClass: 'btn-ionic',
      title: '@rucken/todo-ionic',
      url: 'https://npmjs.org/package/@rucken/todo-ionic',
    },
    {
      buttonClass: 'btn-nestjs',
      title: '@rucken/todo-nestjs',
      url: 'https://npmjs.org/package/@rucken/todo-nestjs',
    },
  ],
});
