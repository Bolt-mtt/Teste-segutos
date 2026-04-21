gsap.registerPlugin(ScrollTrigger);

// Barra de progresso global
gsap.to(".progress-bar", {
    width: "100%",
    ease: "none",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.1 // Scrub permite que a animação siga o scroll com leve suavização
    }
});

// Efeito Parallax no Hero (Some suavemente e vai para cima ao rolar)
gsap.to(".hero-content", {
    y: -150,
    opacity: 0,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true // Exatamente o que o usuário pediu: scroll down avança, scroll up retrocede
    }
});

// Seção Intro - Cards entrando pelos lados
gsap.from(".embarcador", {
    x: -300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "center center",
        scrub: 1 // 1 segundo de "atraso" para suavizar o scrub
    }
});

gsap.from(".transportador", {
    x: 300,
    opacity: 0,
    scrollTrigger: {
        trigger: ".intro",
        start: "top 80%",
        end: "center center",
        scrub: 1
    }
});

// Embarcadores - Grid escalonado
const featureItems = gsap.utils.toArray(".feature-item");
featureItems.forEach((item, index) => {
    gsap.from(item, {
        y: 100,
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
            trigger: item,
            start: "top 95%",
            end: "top 70%",
            scrub: 1
        }
    });
});

// Transportadores - Itens do accordion deslizando
const rcItems = gsap.utils.toArray(".rc-item");
rcItems.forEach((item, index) => {
    gsap.from(item, {
        x: -150,
        opacity: 0,
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 60%",
            scrub: 1
        }
    });
});

// Cards Centrais de Destaque (Nova Lei e Ambiental) - Escala e rotação 3D
const ecoCards = gsap.utils.toArray(".eco-card");
ecoCards.forEach((card) => {
    gsap.from(card, {
        scale: 0.7,
        opacity: 0,
        rotationX: 25,
        y: 100,
        scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "center center",
            scrub: 1
        }
    });
});

// Timeline de Averbação
const timelineItems = gsap.utils.toArray(".timeline-item");
timelineItems.forEach((item, index) => {
    gsap.from(item, {
        x: 100,
        opacity: 0,
        scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "top 60%",
            scrub: 1
        }
    });
});

// Animação de entrada do footer
gsap.from(".footer h2, .footer a", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".footer",
        start: "top 80%",
        end: "center center",
        scrub: 1
    }
});
