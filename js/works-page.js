document.addEventListener("DOMContentLoaded", () => {
    const archive = document.getElementById("works-list-index");

    if (!archive) {
        return;
    }

    const projects = [
        { id: "db3W1IQCjZs", title: "2023 제5회 KDT 해커톤, 인터뷰 영상" },
        { id: "YPwIRMqjNWc", title: "2023 B 스타트업 챌린지, 수상영상 은상" },
        { id: "5o7vS9vmo9U", title: "2023 제5회 KDT 해커톤, 오프닝 영상" },
        { id: "1swohx4w7L8", title: "2023 BOUNCE, 무대 루핑" },
        { id: "iEeb95igTmw", title: "2023 제5회 KDT 해커톤, 행사 스케치" },
        { id: "qgfdiEPqeEM", title: "2023 제8회 부산 ICT 해커톤, 행사 스케치" },
        { id: "_ltESDH4FHg", title: "2023 부산워케이션 생태계 포럼, 무대 루핑" },
        { id: "0TUEyADnLIA", title: "2023 제5회 KDT 해커톤, 무대 루핑" },
        { id: "hMKQPF7rnXY", title: "2023 B 스타트업 챌린지, 수상영상 대상" },
        { id: "WUwAS4GsZSk", title: "2023 B 스타트업 챌린지, 무대 루핑" },
        { id: "E7fNN6LKM-0", title: "2023 제5회 KDT 해커톤, 홍보 SPOT" },
        { id: "BVf9tECXNjw", title: "2023 부산워케이션 생태계 포럼, 행사 스케치" },
        { id: "X7_uQPvdtdc", title: "2023 부산 SW.AI 교육 중등학생 해커톤, 행사 스케치" },
        { id: "W1Z1yvto9iM", title: "2023 B 스타트업 챌린지, 수상영상 특별상" },
        { id: "x_qAgaMajn4", title: "2023 부산글로벌도시포럼, 무대 루핑" },
        { id: "zWgRfMtlglI", title: "2023 부산창업가꿈, 무대 루핑" },
        { id: "WdGT_2IjW04", title: "2023 부산컨벤션산업협회, 오프닝 영상" },
        { id: "YNZcopHD9sY", title: "2023 제16회 국제해양심포지엄, 무대 루핑" },
        { id: "ZSv_A2xAVJg", title: "2023 제4회 KDT 해커톤, 수상영상 대상" },
        { id: "nnKy9vPFRa0", title: "2023 부산컨벤션산업협회, 스케치 영상" },
        { id: "5pOJaj-5h5M", title: "2023 제4회 KDT 해커톤, 행사 스케치" },
        { id: "kTrQpw16lJw", title: "2023 부산컨벤션산업협회 회장 이취임식, 무대 루핑" },
        { id: "_CZE8vj9NA0", title: "2023 제4회 KDT 해커톤, 수상영상 최우수" },
        { id: "FrbtOOPtgP4", title: "2023 제4회 KDT 해커톤, 홍보 SPOT" },
        { id: "sjyONTaJNys", title: "2023 제10회 대한민국 SW 융합해커톤, 루핑 영상" },
        { id: "WCmcLIIXL5o", title: "2023 제4회 KDT 해커톤, 수상영상 우수" },
        { id: "XTVNqvXPP4c", title: "2023 제10회 대한민국 SW 융합해커톤, UECO 입구아치 루핑영상" },
        { id: "Zb_Vz30Z32w", title: "2023 제4회 KDT 해커톤, 시상식 루핑" },
        { id: "WfI38ZwtMnc", title: "2023 제10회 대한민국 SW 융합해커톤, 카운트 퍼포먼스" },
        { id: "hvzGE_C78hI", title: "2023 제4회 KDT 해커톤, 수상영상 대상" },
        { id: "n_rMqGzVstY", title: "2023 제10회 대한민국 SW 융합해커톤, 오프닝 영상" },
        { id: "SFMytQNi__I", title: "2023 제4회 KDT 해커톤, 오프닝 영상" },
        { id: "XuLFfwpHjF0", title: "2023 제10회 대한민국 SW 융합해커톤, 루핑 영상" }
    ];

    archive.innerHTML = projects.map((project, index) => {
        const separator = index < projects.length - 1
            ? '<span class="works-list-separator">,</span>'
            : "";

        return `
            <span class="works-list-item">
                <a class="works-list-link" href="https://www.youtube.com/watch?v=${project.id}" target="_blank" rel="noreferrer">
                    ${project.title}
                </a>
                ${separator}
            </span>
        `;
    }).join("");
});
