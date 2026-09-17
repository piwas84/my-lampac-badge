(function(){
    function init(){
        window.lampaSettings.addItem('badges_filters', {
            name: 'Filters Badges',
            icon: '🎭',
            component: 'settings',
            template: 'component',
            component: 'badges-menu'
        });

        window.lampaSettings.addComponent('badges-menu', {
            template: 'component',
            render: function(c, d){
                const div = document.createElement('div');
                div.style.padding = '15px';

                const label = document.createElement('div');
                label.style.marginBottom = '8px';
                label.style.fontSize = '16px';
                label.textContent = 'Вставте адресу JSON:';
                div.appendChild(label);

                const input = document.createElement('input');
                input.type = 'text';
                input.placeholder = 'https://raw.githubusercontent.com/.../badges.json';
                input.style.width = '100%';
                input.style.padding = '10px';
                input.style.marginBottom = '12px';
                input.style.border = '1px solid #3eac9a';
                input.style.borderRadius = '6px';
                div.appendChild(input);

                const btn = document.createElement('button');
                btn.textContent = 'Завантажити';
                btn.style.width = '100%';
                btn.style.padding = '10px';
                btn.style.background = '#3eac9a';
                btn.style.color = '#000';
                btn.style.border = 'none';
                btn.style.borderRadius = '6px';
                btn.style.fontWeight = 'bold';
                btn.addEventListener('click', () => {
                    const url = input.value.trim();
                    if(!url) return alert('Введіть URL');

                    fetch(url)
                        .then(r => r.json())
                        .then(data => {
                            if(data.badges) window.lampaFilters.load(data.badges);
                            else if(data.filters) window.lampaFilters.load(data.filters);
                            alert('Бейджі успішно завантажено!');
                        })
                        .catch(() => alert('Не вдалося завантажити JSON'));
                });
                div.appendChild(btn);

                return div;
            }
        });

        window.lampaSettings.on('badges_filters', state => {
            if(state) {
                // Жодних бейджів не додаємо — тільки меню
            }
        });

        if(window.lampaSettings.get('badges_filters')) {
            // Жодних бейджів не додаємо — тільки меню
        }
    }

    if(typeof window.lampaSettings !== 'undefined') init();
})();
