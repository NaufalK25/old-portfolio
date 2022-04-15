// Navbar Scroll
const navAboutMe = <HTMLParagraphElement>document.querySelector('p#nav-about-me');
const navMySkills = <HTMLParagraphElement>document.querySelector('p#nav-my-skills');
const navMyProjects = <HTMLParagraphElement>document.querySelector('p#nav-my-projects');

const aboutMeSection = <HTMLElement>document.querySelector('section#about-me');
const mySkillsSection = <HTMLElement>document.querySelector('section#my-skills');
const myProjectsSection = <HTMLElement>document.querySelector('section#my-projects');

navAboutMe.addEventListener('click', () => {
    window.scrollTo({
        top: aboutMeSection.offsetTop - 25,
        behavior: 'smooth',
    });
});

navMySkills.addEventListener('click', () => {
    window.scrollTo({
        top: mySkillsSection.offsetTop - 25,
        behavior: 'smooth',
    });
});

navMyProjects.addEventListener('click', () => {
    window.scrollTo({
        top: myProjectsSection.offsetTop - 25,
        behavior: 'smooth',
    });
});

const getRepoStacks = (repoName: string) => {
    let stacks: string[] = [];
    switch (repoName) {
        case 'JavaScriptAlgorithmsandDataStructures':
            stacks = ['JavaScript',];
            break;
        case 'BackEndDevelopmentandAPIs':
            stacks = ['JavaScript', 'Node.js', 'Express', 'MongoDB',];
            break;
        case 'travdir-api':
            stacks = ['TypeScript', 'Node.js', 'Express', 'MongoDB', 'Heroku',];
            break;
        case 'img-converter':
            stacks = ['Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Heroku',];
            break;
        case 'portfolio':
            stacks = ['Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Heroku',];
            break;
        case 'todo-app':
            stacks = ['Tailwind CSS', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL',];
            break;
        case 'hangman':
            stacks = ['TypeScript',];
            break;
        case 'user-game-api':
            stacks = ['Node.js', 'Express', 'PostgreSQL', 'Heroku',];
            break;
        default:
            stacks = [];
            break;
    }
    return stacks;
}

const insertSVG = (anchorElement: HTMLAnchorElement, svg: string) => {
    anchorElement.appendChild(anchorElement.ownerDocument.importNode(
        new DOMParser().parseFromString(
            svg,
            'application/xml'
        ).documentElement,
        true));
}

// My Projects Section
const myProjectListSection = <HTMLElement>document.querySelector('section#my-project-list');

fetch('https://api.github.com/users/naufalk25/repos?sort=created')
    .then((response) => response.json())
    .then((repos) => {
        repos.forEach((repo: any) => {
            if (repo.name !== 'NaufalK25' && !repo.fork) {
                const repoSection = document.createElement('section');
                repoSection.classList.add(...['lg:w-1/4', 'w-3/4', 'md:w-1/3', 'gap-y-3', 'flex', 'flex-col', 'items-center', 'py-1.5',]);
                repoSection.title = repo.name;

                // Top Section
                const topSection = document.createElement('section');
                topSection.classList.add(...['flex', 'justify-between', 'w-full', 'px-3', 'pt-1.5',]);

                // Repo Name
                const repoName = document.createElement('h4');
                repoName.classList.add(...['text-sm', 'font-bold', 'text-slate-800', 'dark:text-slate-100',]);
                repoName.innerText = repo.name;
                topSection.appendChild(repoName);

                // Repo License
                if (repo.license) {
                    const repoLicense = document.createElement('a');
                    repoLicense.classList.add(...['text-sm', 'hover:underline', 'hover:font-bold', 'active:font-bold', 'focus:font-bold', 'text-slate-800', 'dark:text-slate-100',]);
                    repoLicense.href = repo.license.url;
                    repoLicense.title = repo.license.name;
                    repoLicense.innerText = repo.license.name;
                    topSection.appendChild(repoLicense);
                }

                // Middle Section
                const middleSection = document.createElement('section');
                middleSection.classList.add(...['w-full', 'h-60', 'flex', 'items-end', 'justify-between', 'w-full', 'px-3', 'pb-3',]);
                middleSection.style.backgroundImage = `url(img/repositories/${repo.name}.png)`;
                middleSection.classList.add(...['bg-cover', 'bg-center', 'bg-no-repeat',]);

                // Middle Left Section
                const middleLeftSection = document.createElement('section');
                middleLeftSection.classList.add(...['flex', 'gap-x-2', 'bg-gray-300', 'rounded-md', 'p-1.5', 'shadow-lg', 'shadow-gray-500/50', 'text-slate-800', 'dark:text-slate-800',]);

                // Repo Stacks
                const repoStacks = document.createElement('details');
                const repoStacksSummary = document.createElement('summary');
                repoStacksSummary.classList.add(...['text-sm', 'font-bold', 'cursor-pointer',]);
                repoStacksSummary.innerText = 'Stacks';
                repoStacksSummary.title = 'Stacks';

                const repoStacksList = document.createElement('ul');
                getRepoStacks(repo.name).forEach((stack) => {
                    const repoStack = document.createElement('li');
                    repoStack.classList.add(...['text-sm',]);
                    repoStack.innerText = stack;
                    repoStack.title = stack;
                    repoStacksList.appendChild(repoStack);
                });
                repoStacks.appendChild(repoStacksSummary);
                repoStacks.appendChild(repoStacksList);
                middleLeftSection.appendChild(repoStacks);

                // Middle Right Section
                const middleRightSection = document.createElement('section');
                middleRightSection.classList.add(...['flex', 'gap-x-2', 'bg-gray-300', 'p-1.5', 'rounded-md', 'shadow-lg', 'shadow-gray-500/50',]);

                // Repo Homepage
                if (repo.homepage) {
                    const repoHomepage = document.createElement('a');
                    repoHomepage.classList.add(...['-rotate-45',]);
                    repoHomepage.href = repo.homepage;
                    repoHomepage.target = '_blank';
                    repoHomepage.title = 'Homepage';
                    repoHomepage.rel = 'noopener noreferrer';

                    insertSVG(repoHomepage, `
                        <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 0 25 25" width="25px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M17 7h-4v2h4c1.65 0 3 1.35 3 3s-1.35 3-3 3h-4v2h4c2.76 0 5-2.24 5-5s-2.24-5-5-5zm-6 8H7c-1.65 0-3-1.35-3-3s1.35-3 3-3h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-2zm-3-4h8v2H8z" />
                        </svg>
                    `);
                    middleRightSection.appendChild(repoHomepage);
                }

                // Repo Link
                const repoLink = document.createElement('a');
                repoLink.href = repo.html_url;
                repoLink.target = '_blank';
                repoLink.title = 'Repository';
                repoLink.rel = 'noopener noreferrer';

                insertSVG(
                    repoLink,
                    `
                        <svg width="25px" height="25px" viewBox="0 0 256 250" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
                        <g>
                        <path d="M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z" fill="#161614"></path>
                        </g>
                        </svg>
                    `
                );
                middleRightSection.appendChild(repoLink);

                middleSection.appendChild(middleLeftSection);
                middleSection.appendChild(middleRightSection);

                // Bottom Section
                const bottomSection = document.createElement('section');
                bottomSection.classList.add(...['p-1',]);

                // Repo Description
                const repoDescription = document.createElement('p');
                repoDescription.classList.add(...['text-sm', 'text-slate-800', 'dark:text-slate-100',]);
                repoDescription.innerText = repo.description;
                bottomSection.appendChild(repoDescription);

                // Add all partial section to the repoSection
                repoSection.appendChild(topSection);
                repoSection.appendChild(middleSection);
                repoSection.appendChild(bottomSection);
                // Add repoSection to the myProjectListSection
                myProjectListSection.appendChild(repoSection);
            }
        });
    });
