(() => {
  const LANG_KEY = 'site_lang';
  let roleTimer = null;
  let roleIndex = 0;

  const DICT = {
    pt: {
      'nav.home': 'Início',
      'nav.projects': 'Projetos',
      'nav.resume': 'Currículo',
      'nav.education': 'Formação',
      'nav.experience': 'Experiência',
      'nav.contact': 'Contato',

      'home.hero.imgAlt': 'Foto de perfil de Gustavo',
      'home.hero.eyebrow': 'Disponível para novos desafios',
      'home.hero.h1': 'Olá, este é <span>Gustavo</span>',
      'home.hero.p': 'Olá! Eu sou Gustavo Ignácio, estudante de Engenharia de Software. Gosto de transformar ideias em aplicações bem estruturadas, responsivas e agradáveis de usar, atuando tanto no front-end quanto na integração com back-end e dados.',
      'home.hero.projects': 'Ver projetos',
      'home.hero.contact': 'Contato',
      'home.roles': ['Engenheiro de Software', 'Desenvolvedor Full Stack', 'Desenvolvedor Web'],

      'edu.kicker': 'Aprendizado contínuo',
      'edu.title': 'Formação',
      'edu.box.title': 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS (PUC MINAS)',
      'edu.box.p1': '<strong>Bacharelado em Engenharia de Software</strong> – Previsão de Conclusão: <strong>2027</strong>',
      'edu.box.p2': 'O curso de Engenharia de Software na PUC Minas me proporciona uma formação completa ao longo do ciclo de desenvolvimento, passando por programação, estruturas de dados, arquitetura de software, bancos de dados, gestão de projetos e metodologias ágeis.',

      'xp.kicker': 'Construindo experiência',
      'xp.title': 'Experiência',
      'xp.box.header': 'Em busca da primeira oportunidade',
      'xp.box.p1': 'Ainda não possuo experiência profissional formal na área, mas venho construindo um portfólio consistente por meio de projetos acadêmicos e pessoais.',
      'xp.box.p2': 'Busco minha primeira oportunidade em um ambiente colaborativo, no qual eu possa contribuir, aprender com feedbacks e evoluir tecnicamente.',
      'xp.li1': '<strong>Projetos:</strong> interfaces responsivas, APIs e aplicações full stack.',
      'xp.li2': '<strong>Boas práticas:</strong> Git/GitHub, kanban e documentação.',
      'xp.li3': '<strong>Qualidade:</strong> acessibilidade, semântica e testes básicos.',
      'xp.li4': '<strong>Soft skills:</strong> proatividade e comunicação clara.',

      'projects.title': 'Projetos — Gustavo',
      'projects.kicker': 'O que venho construindo',
      'projects.heading': 'Projetos em destaque',
      'projects.intro': 'Uma seleção de aplicações acadêmicas e pessoais, explorando front-end, back-end, bancos de dados e arquitetura de software.',
      'projects.total': 'projetos',
      'projects.code': 'Ver código',
      'projects.repoSoon': 'Repositório a adicionar',
      'projects.carouselLabel': 'Carrossel de projetos',
      'projects.prevAria': 'Projeto anterior',
      'projects.nextAria': 'Próximo projeto',
      'projects.dotsLabel': 'Navegação entre projetos',
      'projects.hint': 'Use as setas ou arraste para navegar',

      'projects.p1.imgAlt': 'Tela do projeto GearUp',
      'projects.p1.category': 'Full Stack',
      'projects.p1.title': 'GearUp',
      'projects.p1.desc1': 'Plataforma web para gerenciamento de serviços automotivos, veículos, agendamentos, peças e acompanhamento do andamento dos serviços.',

      'projects.p2.imgAlt': 'Tela do projeto G-AGRO',
      'projects.p2.category': 'Full Stack',
      'projects.p2.title': 'G-AGRO',
      'projects.p2.desc1': 'Sistema voltado ao agronegócio, desenvolvido para otimizar processos e apoiar a gestão agrícola.',

      'projects.p3.imgAlt': 'Tela do projeto Clever Routine',
      'projects.p3.category': 'Front-end',
      'projects.p3.title': 'Clever Routine',
      'projects.p3.desc1': 'Sistema desenvolvido para organização de tempo e tarefas, buscando melhorar a rotina de estudos e a qualidade de vida.',

      'projects.p4.desc1': 'Aplicação full stack para controle financeiro pessoal, com autenticação, despesas, metas, contas bancárias e relatórios.',
      'projects.p5.desc1': 'Plataforma gamificada de ensino de inglês com perfis distintos, quizzes, ranking e verificação de e-mail.',
      'projects.p6.desc1': 'Sistema acadêmico distribuído para moedas estudantis, com autenticação JWT, mensageria, benefícios e processamento assíncrono de saldo.',
      'projects.p7.desc1': 'Aplicação de gestão financeira com APIs REST, interface web e recursos de envio e exportação de informações financeiras.',
      'projects.p8.desc1': 'E-commerce com catálogo, carrinho, checkout, preenchimento de endereço por CEP e autorização por perfil de usuário.',

      'resume.headTitle': 'Currículo — Gustavo',
      'resume.title': 'Currículo',
      'resume.kicker': 'Minha trajetória',
      'resume.subtitle': 'Visualize ou baixe a versão do currículo no idioma desejado.',
      'resume.caption.pt': 'Versão: Português',
      'resume.caption.en': 'Version: English',
      'resume.download.pt': 'Baixar currículo PT',
      'resume.download.en': 'Baixar currículo EN',
      'resume.imgAlt.pt': 'Currículo de Gustavo em Português',
      'resume.imgAlt.en': 'Currículo de Gustavo em Inglês',

      'contact.headTitle': 'Contato — Gustavo',
      'contact.kicker': 'Vamos conversar',
      'contact.title': 'Contato',
      'contact.subtitle': 'Tem uma oportunidade, projeto ou ideia? Me envie uma mensagem e responderei o quanto antes.',
      'contact.nameLabel': 'Nome',
      'contact.namePh': 'Seu nome',
      'contact.nameError': 'Informe seu nome (mín. 2 caracteres).',
      'contact.emailLabel': 'E-mail',
      'contact.emailPh': 'seu@email.com',
      'contact.emailError': 'Informe um e-mail válido.',
      'contact.messageLabel': 'Mensagem',
      'contact.messagePh': 'Escreva sua mensagem...',
      'contact.messageError': 'Escreva ao menos 10 caracteres.',
      'contact.send': 'Enviar mensagem',
      'contact.sending': 'Enviando...',
      'contact.success': 'Mensagem enviada com sucesso!',
      'contact.error': 'Falha ao enviar. Tente novamente mais tarde.',
      'contact.validationFail': 'Confira os campos destacados.'
    },

    en: {
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.resume': 'Resume',
      'nav.education': 'Education',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',

      'home.hero.imgAlt': 'Gustavo profile photo',
      'home.hero.eyebrow': 'Open to new challenges',
      'home.hero.h1': 'Hi, this is <span>Gustavo</span>',
      'home.hero.p': 'Hi! I am Gustavo Ignácio, a Software Engineering student. I enjoy turning ideas into well-structured, responsive, and pleasant-to-use applications, working across front-end, back-end integration, and data.',
      'home.hero.projects': 'View projects',
      'home.hero.contact': 'Contact',
      'home.roles': ['Software Engineer', 'Full Stack Developer', 'Web Developer'],

      'edu.kicker': 'Continuous learning',
      'edu.title': 'Education',
      'edu.box.title': 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS (PUC MINAS)',
      'edu.box.p1': '<strong>Bachelor’s degree in Software Engineering</strong> – Expected graduation: <strong>2027</strong>',
      'edu.box.p2': 'The Software Engineering program at PUC Minas provides broad training across the software development lifecycle, including programming, data structures, software architecture, databases, project management, and agile methodologies.',

      'xp.kicker': 'Building experience',
      'xp.title': 'Experience',
      'xp.box.header': 'Seeking my first opportunity',
      'xp.box.p1': 'I do not yet have formal professional experience in the field, but I have been building a consistent portfolio through academic and personal projects.',
      'xp.box.p2': 'I am looking for my first opportunity in a collaborative environment where I can contribute, learn from feedback, and grow technically.',
      'xp.li1': '<strong>Projects:</strong> responsive interfaces, APIs, and full stack applications.',
      'xp.li2': '<strong>Good practices:</strong> Git/GitHub, kanban, and documentation.',
      'xp.li3': '<strong>Quality:</strong> accessibility, semantics, and basic testing.',
      'xp.li4': '<strong>Soft skills:</strong> proactivity and clear communication.',

      'projects.title': 'Projects — Gustavo',
      'projects.kicker': 'What I have been building',
      'projects.heading': 'Featured projects',
      'projects.intro': 'A selection of academic and personal applications exploring front-end, back-end, databases, and software architecture.',
      'projects.total': 'projects',
      'projects.code': 'View code',
      'projects.repoSoon': 'Repository to be added',
      'projects.carouselLabel': 'Projects carousel',
      'projects.prevAria': 'Previous project',
      'projects.nextAria': 'Next project',
      'projects.dotsLabel': 'Projects navigation',
      'projects.hint': 'Use the arrows or swipe to navigate',

      'projects.p1.imgAlt': 'GearUp project screen',
      'projects.p1.category': 'Full Stack',
      'projects.p1.title': 'GearUp',
      'projects.p1.desc1': 'Web platform for managing automotive services, vehicles, appointments, parts, and service progress tracking.',

      'projects.p2.imgAlt': 'G-AGRO project screen',
      'projects.p2.category': 'Full Stack',
      'projects.p2.title': 'G-AGRO',
      'projects.p2.desc1': 'Agribusiness-focused system created to optimize processes and support agricultural management.',

      'projects.p3.imgAlt': 'Clever Routine project screen',
      'projects.p3.category': 'Front-end',
      'projects.p3.title': 'Clever Routine',
      'projects.p3.desc1': 'System developed for organizing time and tasks, helping improve study routines and quality of life.',

      'projects.p4.desc1': 'Full stack personal finance application with authentication, expenses, goals, bank accounts, and reports.',
      'projects.p5.desc1': 'Gamified English learning platform with different user profiles, quizzes, ranking, and email verification.',
      'projects.p6.desc1': 'Distributed academic currency system with JWT authentication, messaging, benefits, and asynchronous balance processing.',
      'projects.p7.desc1': 'Financial management application with REST APIs, web interface, and features for sending and exporting financial information.',
      'projects.p8.desc1': 'E-commerce application with catalog, cart, checkout, ZIP-code address autofill, and role-based authorization.',

      'resume.headTitle': 'Resume — Gustavo',
      'resume.title': 'Resume',
      'resume.kicker': 'My journey',
      'resume.subtitle': 'Preview or download the resume version in your preferred language.',
      'resume.caption.pt': 'Version: Portuguese',
      'resume.caption.en': 'Version: English',
      'resume.download.pt': 'Download resume PT',
      'resume.download.en': 'Download resume EN',
      'resume.imgAlt.pt': 'Gustavo resume in Portuguese',
      'resume.imgAlt.en': 'Gustavo resume in English',

      'contact.headTitle': 'Contact — Gustavo',
      'contact.kicker': 'Let’s talk',
      'contact.title': 'Contact',
      'contact.subtitle': 'Have an opportunity, project, or idea? Send me a message and I will get back to you as soon as possible.',
      'contact.nameLabel': 'Name',
      'contact.namePh': 'Your name',
      'contact.nameError': 'Please enter your name (min. 2 characters).',
      'contact.emailLabel': 'Email',
      'contact.emailPh': 'your@email.com',
      'contact.emailError': 'Please enter a valid email.',
      'contact.messageLabel': 'Message',
      'contact.messagePh': 'Write your message...',
      'contact.messageError': 'Please write at least 10 characters.',
      'contact.send': 'Send message',
      'contact.sending': 'Sending...',
      'contact.success': 'Message sent successfully!',
      'contact.error': 'Failed to send. Please try again later.',
      'contact.validationFail': 'Please check the highlighted fields.'
    }
  };

  window.__DICT__ = DICT;

  const getSavedLang = () => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  };

  const applyI18n = (lang) => {
    const dict = DICT[lang] || DICT.pt;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.body.dataset.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const val = dict[el.dataset.i18n];
      if (val != null && !Array.isArray(val)) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const val = dict[el.dataset.i18nHtml];
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const specs = (el.dataset.i18nAttr || '').split(/[;|,]/).map(item => item.trim()).filter(Boolean);
      specs.forEach(spec => {
        const separator = spec.indexOf(':');
        if (separator < 1) return;
        const attr = spec.slice(0, separator).trim();
        const key = spec.slice(separator + 1).trim();
        const val = dict[key];
        if (val != null && !Array.isArray(val)) el.setAttribute(attr, String(val).replace(/<[^>]*>/g, ''));
      });
    });

    document.querySelectorAll('[data-pt-src],[data-en-src]').forEach(el => {
      const next = el.getAttribute(lang === 'pt' ? 'data-pt-src' : 'data-en-src');
      if (next) el.setAttribute('src', next);
    });

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl && dict[titleEl.dataset.i18n]) titleEl.textContent = dict[titleEl.dataset.i18n];

    const cvImg = document.getElementById('cvImg');
    if (cvImg) cvImg.alt = lang === 'pt' ? dict['resume.imgAlt.pt'] : dict['resume.imgAlt.en'];

    const cvCaption = document.getElementById('cvCaption');
    if (cvCaption) cvCaption.textContent = lang === 'pt' ? dict['resume.caption.pt'] : dict['resume.caption.en'];

    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
      langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
      langBtn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
    }

    startRoleRotation(lang);
    updateMenuLabel(lang);
  };

  const startRoleRotation = (lang) => {
    if (roleTimer) window.clearInterval(roleTimer);
    const roles = DICT[lang]['home.roles'];
    if (!Array.isArray(roles) || !roles.length) return;

    roleIndex = 0;
    const applyRole = () => {
      const role = roles[roleIndex % roles.length];
      document.documentElement.style.setProperty('--role', JSON.stringify(role));
      roleIndex += 1;
    };

    applyRole();
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      roleTimer = window.setInterval(applyRole, 2800);
    }
  };

  const updateMenuLabel = (lang) => {
    const menuBtn = document.getElementById('menuToggle');
    if (!menuBtn) return;
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    const label = lang === 'pt'
      ? (expanded ? 'Fechar menu' : 'Abrir menu')
      : (expanded ? 'Close menu' : 'Open menu');
    menuBtn.setAttribute('aria-label', label);
  };

  const initMenu = () => {
    const menuBtn = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');
    if (!menuBtn || !nav) return;

    const setOpen = (open) => {
      nav.classList.toggle('active', open);
      menuBtn.setAttribute('aria-expanded', String(open));
      const icon = menuBtn.querySelector('i');
      icon?.classList.toggle('fa-bars', !open);
      icon?.classList.toggle('fa-xmark', open);
      updateMenuLabel(document.body.dataset.lang || 'pt');
    };

    menuBtn.addEventListener('click', () => setOpen(menuBtn.getAttribute('aria-expanded') !== 'true'));
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') setOpen(false);
    });
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !menuBtn.contains(event.target)) setOpen(false);
    });
  };

  const initHeader = () => {
    const header = document.querySelector('body > header');
    if (!header) return;
    const update = () => header.classList.toggle('scrolled', window.scrollY > 18);
    update();
    window.addEventListener('scroll', update, { passive: true });
  };

  const initReveal = () => {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    items.forEach(item => observer.observe(item));
  };

  const preloadResume = () => {
    const cv = document.getElementById('cvImg');
    if (!cv) return;
    const alternate = cv.getAttribute(document.body.dataset.lang === 'pt' ? 'data-en-src' : 'data-pt-src');
    if (alternate) {
      const img = new Image();
      img.src = alternate;
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    const initialLang = getSavedLang();
    applyI18n(initialLang);
    initMenu();
    initHeader();
    initReveal();
    preloadResume();

    document.getElementById('langToggle')?.addEventListener('click', () => {
      const next = document.body.dataset.lang === 'pt' ? 'en' : 'pt';
      localStorage.setItem(LANG_KEY, next);
      applyI18n(next);
      document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: next } }));
    });
  });
})();
