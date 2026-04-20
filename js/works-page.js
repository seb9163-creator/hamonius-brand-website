document.addEventListener("DOMContentLoaded", () => {
    const worksGrid = document.getElementById("works-grid");
    const filterToggle = document.querySelector(".works-filter-toggle");
    const filterPanel = document.getElementById("works-filter-panel");
    const filterChips = Array.from(document.querySelectorAll(".works-filter-chip"));

    if (!worksGrid) {
        return;
    }

    const works = [
        { id: "db3W1IQCjZs", title: "2023 제5회 KDT 해커톤", meta: "인터뷰 영상", categories: ["event", "content"] },
        { id: "YPwIRMqjNWc", title: "2023 B 스타트업 챌린지", meta: "수상영상 은상", categories: ["content", "film"] },
        { id: "5o7vS9vmo9U", title: "2023 제5회 KDT 해커톤", meta: "오프닝 영상", categories: ["event", "film"] },
        { id: "1swohx4w7L8", title: "2023 BOUNCE", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "iEeb95igTmw", title: "2023 제5회 KDT 해커톤", meta: "행사 스케치", categories: ["event", "content"] },
        { id: "qgfdiEPqeEM", title: "2023 제8회 부산 ICT 해커톤", meta: "행사 스케치", categories: ["event", "content"] },
        { id: "_ltESDH4FHg", title: "2023 부산워케이션 생태계 포럼", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "0TUEyADnLIA", title: "2023 제5회 KDT 해커톤", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "hMKQPF7rnXY", title: "2023 B 스타트업 챌린지", meta: "수상영상 대상", categories: ["content", "film"] },
        { id: "WUwAS4GsZSk", title: "2023 B 스타트업 챌린지", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "E7fNN6LKM-0", title: "2023 제5회 KDT 해커톤", meta: "홍보 SPOT", categories: ["content", "film"] },
        { id: "BVf9tECXNjw", title: "2023 부산워케이션 생태계 포럼", meta: "행사 스케치", categories: ["event", "content"] },
        { id: "X7_uQPvdtdc", title: "2023 부산 SW.AI 교육 중등학생 해커톤", meta: "행사 스케치", categories: ["event", "content"] },
        { id: "W1Z1yvto9iM", title: "2023 B 스타트업 챌린지", meta: "수상영상 특별상", categories: ["content", "film"] },
        { id: "x_qAgaMajn4", title: "2023 부산글로벌도시포럼", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "zWgRfMtlglI", title: "2023 부산창업가꿈", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "WdGT_2IjW04", title: "2023 부산컨벤션산업협회", meta: "오프닝 영상", categories: ["event", "film"] },
        { id: "YNZcopHD9sY", title: "2023 제16회 국제해양심포지엄", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "ZSv_A2xAVJg", title: "2023 제4회 KDT 해커톤", meta: "수상영상 대상", categories: ["content", "film"] },
        { id: "nnKy9vPFRa0", title: "2023 부산컨벤션산업협회", meta: "스케치 영상", categories: ["event", "content"] },
        { id: "5pOJaj-5h5M", title: "2023 제4회 KDT 해커톤", meta: "행사 스케치", categories: ["event", "content"] },
        { id: "kTrQpw16lJw", title: "2023 부산컨벤션산업협회 회장 이취임식", meta: "무대 루핑", categories: ["production", "content"] },
        { id: "_CZE8vj9NA0", title: "2023 제4회 KDT 해커톤", meta: "수상영상 최우수", categories: ["content", "film"] },
        { id: "FrbtOOPtgP4", title: "2023 제4회 KDT 해커톤", meta: "홍보 SPOT", categories: ["content", "film"] },
        { id: "sjyONTaJNys", title: "2023 제10회 대한민국 SW 융합해커톤", meta: "루핑 영상", categories: ["production", "content"] },
        { id: "WCmcLIIXL5o", title: "2023 제4회 KDT 해커톤", meta: "수상영상 우수", categories: ["content", "film"] },
        { id: "XTVNqvXPP4c", title: "2023 제10회 대한민국 SW 융합해커톤", meta: "UECO 입구아치 루핑영상", categories: ["production", "content"] },
        { id: "Zb_Vz30Z32w", title: "2023 제4회 KDT 해커톤", meta: "시상식 루핑", categories: ["production", "content"] },
        { id: "WfI38ZwtMnc", title: "2023 제10회 대한민국 SW 융합해커톤", meta: "카운트 퍼포먼스", categories: ["production", "content"] },
        { id: "hvzGE_C78hI", title: "2023 제4회 KDT 해커톤", meta: "수상영상 대상", categories: ["content", "film"] },
        { id: "n_rMqGzVstY", title: "2023 제10회 대한민국 SW 융합해커톤", meta: "오프닝 영상", categories: ["event", "film"] },
        { id: "SFMytQNi__I", title: "2023 제4회 KDT 해커톤", meta: "오프닝 영상", categories: ["event", "film"] },
        { id: "XuLFfwpHjF0", title: "2023 제10회 대한민국 SW 융합해커톤", meta: "루핑 영상", categories: ["production", "content"] }
    ];

    const escapeHtml = (value) => String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

    worksGrid.innerHTML = works.map((work) => `
        <article class="works-card" data-category="${work.categories.join(" ")}">
            <a class="works-card__thumb" href="https://www.youtube.com/watch?v=${work.id}" target="_blank" rel="noreferrer" aria-label="${escapeHtml(work.title)} ${escapeHtml(work.meta)}">
                <img src="https://i.ytimg.com/vi/${work.id}/hqdefault.jpg" alt="${escapeHtml(work.title)} 썸네일" loading="lazy">
            </a>
            <div class="works-card__caption">
                <a class="works-card__title" href="https://www.youtube.com/watch?v=${work.id}" target="_blank" rel="noreferrer">${escapeHtml(work.title)}</a>
                <span class="works-card__meta">${escapeHtml(work.meta)}</span>
            </div>
        </article>
    `).join("");

    const syncFilter = (selectedFilter) => {
        filterChips.forEach((chip) => {
            chip.classList.toggle("is-active", chip.dataset.filter === selectedFilter);
        });

        worksGrid.querySelectorAll(".works-card").forEach((card) => {
            const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
            const visible = selectedFilter === "all" || categories.includes(selectedFilter);
            card.classList.toggle("is-hidden", !visible);
        });
    };

    if (filterToggle && filterPanel) {
        filterToggle.addEventListener("click", () => {
            const nextExpanded = filterToggle.getAttribute("aria-expanded") !== "true";
            filterToggle.setAttribute("aria-expanded", String(nextExpanded));
            filterToggle.textContent = nextExpanded ? "Filters -" : "Filters +";
            filterPanel.hidden = !nextExpanded;
        });
    }

    filterChips.forEach((chip) => {
        chip.addEventListener("click", () => {
            syncFilter(chip.dataset.filter || "all");
        });
    });

    syncFilter("all");
});
