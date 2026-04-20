document.addEventListener("DOMContentLoaded", () => {
    const portfolioGrid = document.getElementById("works-portfolio-grid");
    const filterButtons = Array.from(document.querySelectorAll(".works-filter"));
    const totalCount = document.getElementById("works-total-count");

    if (!portfolioGrid || !filterButtons.length) {
        return;
    }

    const works = [
        { id: "db3W1IQCjZs", title: "2023 제5회 KDT 해커톤 | 인터뷰 영상", categories: ["event", "content"] },
        { id: "YPwIRMqjNWc", title: "2023 B 스타트업 챌린지 | 수상영상_은상", categories: ["content", "film"] },
        { id: "5o7vS9vmo9U", title: "2023 제5회 KDT 해커톤 | 오프닝 영상", categories: ["event", "film"] },
        { id: "1swohx4w7L8", title: "2023 BOUNCE | 무대 루핑", categories: ["production", "content"] },
        { id: "iEeb95igTmw", title: "2023 제5회 KDT 해커톤 | 행사스케치", categories: ["event", "content"] },
        { id: "qgfdiEPqeEM", title: "2023 제8회 부산 ICT 해커톤 | 행사스케치", categories: ["event", "content"] },
        { id: "_ltESDH4FHg", title: "2023 부산워케이션 생태계 포럼 | 무대 루핑", categories: ["production", "content"] },
        { id: "0TUEyADnLIA", title: "2023 제5회 KDT 해커톤 | 무대 루핑", categories: ["production", "content"] },
        { id: "hMKQPF7rnXY", title: "2023 B 스타트업 챌린지 | 수상영상_대상", categories: ["content", "film"] },
        { id: "WUwAS4GsZSk", title: "2023 B 스타트업 챌린지 | 무대루핑", categories: ["production", "content"] },
        { id: "E7fNN6LKM-0", title: "2023 제5회 KDT 해커톤 | 홍보 SPOT", categories: ["content", "film"] },
        { id: "BVf9tECXNjw", title: "2023 부산워케이션 생태계 포럼 | 행사스케치", categories: ["event", "content"] },
        { id: "X7_uQPvdtdc", title: "2023 부산 SW.AI 교육 중등학생 해커톤 | 행사스케치", categories: ["event", "content"] },
        { id: "W1Z1yvto9iM", title: "2023 B 스타트업 챌린지 | 수상영상_특별상", categories: ["content", "film"] },
        { id: "x_qAgaMajn4", title: "2023 부산글로벌도시포럼 | 무대루핑", categories: ["production", "content"] },
        { id: "zWgRfMtlglI", title: "2023 부산창업가꿈 | 무대루핑", categories: ["production", "content"] },
        { id: "WdGT_2IjW04", title: "2023 부산컨벤션산업협회 | 오프닝영상", categories: ["event", "film"] },
        { id: "YNZcopHD9sY", title: "2023 제16회 국제해양심포지엄 | 무대루핑", categories: ["production", "content"] },
        { id: "ZSv_A2xAVJg", title: "2023 제4회 KDT 해커톤 | 수상영상_대상", categories: ["content", "film"] },
        { id: "nnKy9vPFRa0", title: "2023 부산컨벤션산업협회 | 스케치 영상", categories: ["event", "content"] },
        { id: "5pOJaj-5h5M", title: "2023 제4회 KDT 해커톤 | 행사 스케치", categories: ["event", "content"] },
        { id: "kTrQpw16lJw", title: "2023 부산컨벤션산업협회 회장이취임식 | 무대루핑", categories: ["production", "content"] },
        { id: "_CZE8vj9NA0", title: "2023 제4회 KDT 해커톤 | 수상영상_최우수", categories: ["content", "film"] },
        { id: "FrbtOOPtgP4", title: "2023 제4회 KDT 해커톤 | 홍보 SPOT", categories: ["content", "film"] },
        { id: "sjyONTaJNys", title: "2023 제10회 대한민국 SW 융합해커톤 | 루핑영상", categories: ["production", "content"] },
        { id: "WCmcLIIXL5o", title: "2023 제4회 KDT 해커톤 | 수상영상_우수", categories: ["content", "film"] },
        { id: "XTVNqvXPP4c", title: "2023 제10회 대한민국 SW 융합해커톤 | UECO 입구아치 루핑영상", categories: ["production", "content"] },
        { id: "Zb_Vz30Z32w", title: "2023 제4회 KDT 해커톤 | 시상식 루핑", categories: ["production", "content"] },
        { id: "WfI38ZwtMnc", title: "2023 제10회 대한민국 SW 융합해커톤 | 카운트 퍼포먼스", categories: ["production", "content"] },
        { id: "hvzGE_C78hI", title: "2023 제4회 KDT 해커톤 | 수상영상_대상", categories: ["content", "film"] },
        { id: "n_rMqGzVstY", title: "2023 제10회 대한민국 SW 융합해커톤 | 오프닝영상", categories: ["event", "film"] },
        { id: "SFMytQNi__I", title: "2023 제4회 KDT 해커톤 | 오프닝 영상", categories: ["event", "film"] },
        { id: "XuLFfwpHjF0", title: "2023 제10회 대한민국 SW 융합해커톤 | 루핑영상", categories: ["production", "content"] }
    ];

    const categoryMeta = {
        event: { label: "Event" },
        content: { label: "Content" },
        film: { label: "Film" },
        production: { label: "Production" }
    };

    const escapeHtml = (value) => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    const buildExcerpt = (categories) => {
        if (categories.includes("event") && categories.includes("film")) {
            return "행사의 첫 인상을 만드는 오프닝과 무드 필름 중심 작업입니다. 브랜드 톤과 현장 에너지를 짧고 강하게 전달합니다.";
        }

        if (categories.includes("content") && categories.includes("film")) {
            return "메시지 전달력과 시각 완성도를 함께 가져가는 홍보 및 수상 영상 작업입니다. 목적이 명확한 브랜드 필름 계열입니다.";
        }

        if (categories.includes("production")) {
            return "무대 루핑, 퍼포먼스, 현장 스크린 비주얼 등 운영과 몰입감을 함께 설계하는 프로덕션 중심 결과물입니다.";
        }

        return "행사 스케치와 인터뷰를 중심으로 현장의 분위기와 참여 경험을 자연스럽게 담아낸 콘텐츠 아카이브입니다.";
    };

    const buildCards = () => {
        portfolioGrid.innerHTML = works.map((work, index) => {
            const labels = work.categories.map((category) => categoryMeta[category].label);
            const animationClass = index % 3 === 1 ? " delay-1" : index % 3 === 2 ? " delay-2" : "";

            return `
                <article class="works-portfolio-card reveal-up${animationClass}" data-category="${work.categories.join(" ")}">
                    <a class="works-portfolio-card__thumb" href="https://www.youtube.com/watch?v=${work.id}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(work.title)}">
                        <img src="https://i.ytimg.com/vi/${work.id}/hqdefault.jpg" alt="${escapeHtml(work.title)} 썸네일" loading="lazy">
                    </a>
                    <div class="works-portfolio-card__body">
                        <p class="works-portfolio-card__meta">${labels.join(" / ").toUpperCase()}</p>
                        <h3 class="works-portfolio-card__title">${escapeHtml(work.title)}</h3>
                        <p class="works-portfolio-card__excerpt">${buildExcerpt(work.categories)}</p>
                        <div class="works-portfolio-card__footer">
                            <div class="works-portfolio-card__tags">
                                ${labels.map((label) => `<span class="works-portfolio-card__tag">${label}</span>`).join("")}
                            </div>
                            <a class="works-portfolio-card__link" href="https://www.youtube.com/watch?v=${work.id}" target="_blank" rel="noreferrer">View Project</a>
                        </div>
                    </div>
                </article>
            `;
        }).join("");
    };

    const revealCards = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        portfolioGrid.querySelectorAll(".reveal-up").forEach((card) => {
            if (!card.classList.contains("active")) {
                observer.observe(card);
            }
        });
    };

    const updateFilterLabels = () => {
        const counts = works.reduce((accumulator, work) => {
            accumulator.all += 1;
            work.categories.forEach((category) => {
                accumulator[category] += 1;
            });
            return accumulator;
        }, { all: 0, event: 0, content: 0, film: 0, production: 0 });

        filterButtons.forEach((button) => {
            const key = button.dataset.filter || "all";
            const label = key.toUpperCase();
            button.textContent = `${label} ${counts[key]}`;
        });

        if (totalCount) {
            totalCount.textContent = String(counts.all);
        }
    };

    const syncFilter = (selectedFilter) => {
        filterButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.filter === selectedFilter);
        });

        portfolioGrid.querySelectorAll(".works-portfolio-card").forEach((card) => {
            const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
            const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
            card.classList.toggle("is-hidden", !shouldShow);
        });
    };

    buildCards();
    revealCards();
    updateFilterLabels();
    syncFilter("all");

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            syncFilter(button.dataset.filter || "all");
        });
    });
});
