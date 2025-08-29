(() => {
  const LANG_KEY = 'site_lang';
  const DICT = {
    pt: {
      // Navegação
      'nav.home': 'Início',
      'nav.projects': 'Projetos',
      'nav.resume': 'Currículo',
      'nav.education': 'Formação',
      'nav.experience': 'Experiência',
      'nav.contact': 'Contato',

      // Início
      'home.hero.imgAlt': 'Foto de perfil',
      'home.hero.h1': 'Olá, este é <span>Gustavo</span>',
      'home.hero.iAm': 'Eu sou ',
      'home.hero.p':
        'Olá! Eu sou Gustavo Ignácio, estudante de Engenharia de Software. Minha paixão está no desenvolvimento, principalmente na parte do front. Ao longo da minha carreira acadêmica, contribui ativamente para o design de soluções, implementação de funcionalidades e otimização de desempenho nas camadas web e de dados. Estou sempre em busca de aplicar e expandir minha expertise técnica em ambientes inovadores e colaborativos.',
      'home.hero.contact': 'Contato',

      // Formação
      'edu.title': 'Formação',
      'edu.box.title': 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS (PUC MINAS)',
      'edu.box.p1':
        'Bacharelado em Engenharia de Software – Previsão de Conclusão: 2027',
      'edu.box.p2':
        'O curso de Engenharia de Software na PUC Minas me proporciona uma formação completa, focada em todo o ciclo de desenvolvimento de software. A grade curricular abrange desde linguagens de programação e estruturas de dados até arquitetura de software, gestão de projetos e metodologias ágeis, preparando-me para criar soluções robustas e escaláveis.',

      // Experiência
      'xp.title': 'Experiência',
      'xp.box.header': 'Em busca da primeira oportunidade',
      'xp.box.p1':
        'Ainda não possuo experiência profissional formal na área, mas venho construindo um portfólio sólido por meio de projetos acadêmicos e pessoais.',
      'xp.box.p2':
        'Busco minha primeira oportunidade (estágio/trainee) em um ambiente colaborativo para contribuir e evoluir com feedbacks e metodologias ágeis.',
      'xp.li1': 'Projetos: páginas responsivas, consumo de APIs e CRUDs simples.',
      'xp.li2': 'Boas práticas: Git/GitHub, kanban, documentação.',
      'xp.li3': 'Qualidade: acessibilidade, semântica e testes básicos.',
      'xp.li4': 'Soft skills:proatividade e comunicação clara.',

      // Projetos
      'projects.title': 'Projetos em destaque',
      'projects.code': 'Código',
      'projects.docs': 'Docs',
      'projects.carouselLabel': 'Carrossel de projetos',
      'projects.prevLabel': '<',
      'projects.nextLabel': '>',
      'projects.dotsLabel': 'Navegação de slides',

      // Slide 1
      'projects.p1.imgAlt': 'Preview do Projeto 1',
      'projects.p1.title': 'Projeto 1 — Gerenciamento de organização e serviços de mecânica',
      'projects.p1.desc1':
        'O projeto GearUp tem como objetivo facilitar o gerenciamento de serviços automotivos por meio de uma plataforma web intuitiva e eficiente. A aplicação permite que clientes cadastrem seus veículos, agendem serviços com facilidade e acompanhem o andamento em tempo real. Funcionários podem cadastrar serviços, visualizar agendamentos, atualizar status e registrar observações. O sistema também oferece controle de peças e relatórios mensais para apoiar a tomada de decisão.',
      'projects.p1.desc2': 'Stacks: HTML, CSS, JavaScript, PostgreSQL e Java Spring Boot.',

      // Slide 2
      'projects.p2.imgAlt': 'Preview do Projeto 2',
      'projects.p2.title': 'Projeto 2 — G-AGRO',
      'projects.p2.desc1':
        'O G-AGRO foi um projeto de sistema voltado para o agronegócio, com foco na otimização da gestão agrícola.',
      'projects.p2.desc2':
        'Stack: PostgreSQL, HTML, CSS, JavaScript, React, Bootstrap, Java Spring Boot.',

      // Slide 3
      'projects.p3.imgAlt': 'Preview do Projeto 3',
      'projects.p3.title': 'Projeto 3 — Loja Virtual',
      'projects.p3.desc1': 'Sistema desenvolvido para a organização e adequação de tempo e tarefas para melhor qualidade de estudo e vida.',
      'projects.p3.desc2': 'Stack: HTML, CSS, JavaScript.',

      // Currículo
      'resume.caption.pt': 'Versão: Português',
      'resume.download.pt': 'Download (PT)',
      'resume.download.en': 'Download (EN)',

      // Contato
      'contact.headTitle':'Contato — Gustavo',
      'contact.title':'Contato',
      'contact.subtitle':'Me envie uma mensagem e responderei o quanto antes.',
      'contact.nameLabel':'Nome','contact.namePh':'Seu nome','contact.nameError':'Informe seu nome (mín. 2 caracteres).',
      'contact.emailLabel':'E-mail','contact.emailPh':'seu@email.com','contact.emailError':'Informe um e-mail válido.',
      'contact.messageLabel':'Mensagem','contact.messagePh':'Escreva sua mensagem...','contact.messageError':'Escreva ao menos 10 caracteres.',
      'contact.send':'Enviar','contact.sending':'Enviando...','contact.success':'Mensagem enviada com sucesso!','contact.error':'Falha ao enviar. Tente novamente mais tarde.','contact.validationFail':'Confira os campos destacados.',
    },

    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.projects': 'Projects',
      'nav.resume': 'Resume',
      'nav.education': 'Education',
      'nav.experience': 'Experience',
      'nav.contact': 'Contact',

      // Home
      'home.hero.imgAlt': 'Profile photo',
      'home.hero.h1': 'Hello, this is <span>Gustavo</span>',
      'home.hero.iAm': 'I am ',
      'home.hero.p':
        'Hi! I’m Gustavo Ignácio, a Software Engineering student. I’m passionate about development, especially front-end. Throughout my academic journey, I’ve actively contributed to solution design, feature implementation, and performance optimization across web and data layers. I’m always looking to apply and expand my technical expertise in innovative, collaborative environments.',
      'home.hero.contact': 'Contact',

      // Formation
      'edu.title': 'Formation',
      'edu.box.title': 'PONTIFÍCIA UNIVERSIDADE CATÓLICA DE MINAS GERAIS (PUC MINAS)',
      'edu.box.p1':
        "Bachelor's in Software Engineering – Expected Graduation: 2027",
      'edu.box.p2':
        'The Software Engineering program at PUC Minas provides comprehensive training across the entire software development lifecycle. The curriculum covers programming languages and data structures through software architecture, project management, and agile methodologies, preparing me to build robust and scalable solutions.',

      // Experience
      'xp.title': 'Experience',
      'xp.box.header': 'Seeking my first opportunity',
      'xp.box.p1':
        'I do not yet have formal professional experience in the field, but I am building a solid portfolio through academic and personal projects.',
      'xp.box.p2':
        'I am looking for my first opportunity (intern/trainee) in a collaborative environment to contribute and grow with feedback and agile practices.',
      'xp.li1': 'Projects: responsive pages, public APIs, and simple CRUDs.',
      'xp.li2': 'Good practices: Git/GitHub, kanban, documentation.',
      'xp.li3': 'Quality: accessibility, semantics, and basic tests.',
      'xp.li4': 'Soft skills: proactiveness and clear communication.',

      // Projects
      'projects.title': 'Featured Projects',
      'projects.code': 'Source',
      'projects.docs': 'Docs',
      'projects.carouselLabel': 'Projects carousel',
      'projects.prevLabel': '<',
      'projects.nextLabel': '>',
      'projects.dotsLabel': 'Slides navigation',

      // Slide 1
      'projects.p1.imgAlt': 'Project 1 preview',
      'projects.p1.title': 'Project 1 — Auto service and organization management',
      'projects.p1.desc1':
        'GearUp aims to streamline automotive service management through an intuitive and efficient web platform. Clients can register vehicles, schedule services easily, and track progress in real time. Staff can register services, view schedules, update statuses, and add notes. The system also provides parts control and monthly reports to support decision-making.',
      'projects.p1.desc2': 'Stack: HTML, CSS, JavaScript, PostgreSQL, and Java Spring Boot.',

      // Slide 2
      'projects.p2.imgAlt': 'Project 2 preview',
      'projects.p2.title': 'Project 2 — G-AGRO',
      'projects.p2.desc1':
        'G-AGRO was a system project for agribusiness, focused on optimizing agricultural management.',
      'projects.p2.desc2':
        'Stack: PostgreSQL, HTML, CSS, JavaScript, React, Bootstrap, Java Spring Boot.',

      // Slide 3
      'projects.p3.imgAlt': 'Project 3 preview',
      'projects.p3.title': 'Project 3 — Online Store',
      'projects.p3.desc1': 'System developed for organizing and adapting time and tasks for a better quality of study and life.',
      'projects.p3.desc2': 'Stack: HTML, CSS, JavaScript.',

      // Resume
      'resume.caption.en': 'Version: English',
      'resume.download.pt': 'Download (PT)',
      'resume.download.en': 'Download (EN)',
      // Contact
      'contact.headTitle':'Contact — Gustavo',
      'contact.title':'Contact',
      'contact.subtitle':'Send me a message and I’ll get back to you soon.',
      'contact.nameLabel':'Name','contact.namePh':'Your name','contact.nameError':'Please enter your name (min. 2 characters).',
      'contact.emailLabel':'Email','contact.emailPh':'your@email.com','contact.emailError':'Please enter a valid email.',
      'contact.messageLabel':'Message','contact.messagePh':'Write your message...','contact.messageError':'Please write at least 10 characters.',
      'contact.send':'Send','contact.sending':'Sending...','contact.success':'Message sent successfully!','contact.error':'Failed to send. Please try again later.','contact.validationFail':'Please check the highlighted fields.',
    }
  };

  const getSavedLang = () => {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === 'pt' || saved === 'en') return saved;
    return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  };

  const setLangAttr = (lang) => {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
  };

  const setToggleLabel = (lang) => {
    const btn = document.getElementById('langToggle');
    if (!btn) return;
    btn.textContent = lang === 'pt' ? 'EN' : 'PT';
    btn.setAttribute('aria-label', lang === 'pt' ? 'Switch to English' : 'Mudar para Português');
  };

  const applyI18n = (lang) => {
    const dict = DICT[lang] || {};

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (val != null) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const val = dict[key];
      if (val != null) el.innerHTML = val;
    });

    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      const spec = el.getAttribute('data-i18n-attr') || '';
      const pairs = spec.split(/[;|,]/).map(s => s.trim()).filter(Boolean);
      pairs.forEach(p => {
        const [attr, key] = p.split(':').map(s => s.trim());
        if (!attr || !key) return;
        const val = dict[key];
        if (val != null) el.setAttribute(attr, String(val).replace(/<[^>]*>?/g, ''));
      });
    });

    document.querySelectorAll('[data-pt-src],[data-en-src]').forEach(el => {
      const next = el.getAttribute(lang === 'pt' ? 'data-pt-src' : 'data-en-src');
      if (next) el.setAttribute('src', next);
    });
    document.querySelectorAll('[data-pt-href],[data-en-href]').forEach(el => {
      const next = el.getAttribute(lang === 'pt' ? 'data-pt-href' : 'data-en-href');
      if (next) el.setAttribute('href', next);
    });

    const cvCaption = document.getElementById('cvCaption');
    if (cvCaption) {
      const key = (lang === 'pt') ? 'resume.caption.pt' : 'resume.caption.en';
      const val = dict[key];
      if (val) cvCaption.textContent = val;
    }

    const roleWord = (lang === 'pt') ? '"Engenheiro de Software"' : '"Software Engineer"';
    document.documentElement.style.setProperty('--role', roleWord);

    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n');
      if (dict[key] != null) titleEl.textContent = dict[key];
    }
  };

  const setLanguage = (lang) => {
    localStorage.setItem(LANG_KEY, lang);
    setLangAttr(lang);
    setToggleLabel(lang);
    applyI18n(lang);
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang } }));
  };

  const preloadResumeEn = () => {
    const cv = document.getElementById('cvImg');
    if (!cv) return;
    const enSrc = cv.getAttribute('data-en-src') || 'img/cv-en.jpg';
    const img = new Image();
    img.src = enSrc;
  };

  document.addEventListener('DOMContentLoaded', () => {
    const initial = getSavedLang();
    setLanguage(initial);
    preloadResumeEn();

    const btn = document.getElementById('langToggle');
    btn?.addEventListener('click', () => {
      const next = (document.body.dataset.lang === 'pt') ? 'en' : 'pt';
      setLanguage(next);
    });
  });
})();
