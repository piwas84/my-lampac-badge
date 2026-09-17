(function(){
    const BADGES = [
        {name:"🇬🇧",color:"#3eac9a",id:"l-en",pattern:"(?i)(?<![^\\s\\[(_\\-.,])(english|eng)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇪🇸",color:"#3eac9a",id:"l-es",pattern:"(?i)(?<![^\\s\\[(_\\-.,])(spanish|spa|esp|latino|lat)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇫🇷",color:"#3eac9a",id:"l-fr","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(french|fra|fr|vf|vff|vfi|vf2|vfq|truefrench)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇩🇪",color:"#3eac9a",id:"l-de","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(deu(?:tsch)?(?:land)?|ger(?:man)?|german)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇮🇹",color:"#3eac9a",id:"l-it","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(italian|ita)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇧🇷",color:"#3eac9a",id:"l-pt-br","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(portuguese[ .\\-_]?brazil|pt[ .\\-_]?br|brazilian)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇵🇹",color:"#3eac9a",id:"l-pt-pt","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(portuguese(?!(?:[ .\\-_]?brazil))|portuguese[ .\\-_]?(?:portugal|europe(?:an)?)|pt[ .\\-_]?pt)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇹🇷",color:"#3eac9a",id:"l-tr","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(turkish|tur)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇵🇱",color:"#3eac9a",id:"l-pl","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(polish|pol)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇺🇦",color:"#3eac9a",id:"l-uk","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(ukrainian|ukr)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇮🇩",color:"#3eac9a",id:"l-id","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(indonesian|ind)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇹🇭",color:"#3eac9a",id:"l-th","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(thai|tha)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇻🇳",color:"#3eac9a",id:"l-vi","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(vietnamese|vie)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)"},
        {name:"🇯🇵",color:"#3eac9a",id:"l-ja","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(japanese|jap|jpn)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[぀-ゟ゠-ヿ]{3,}"},
        {name:"🇰🇷",color:"#3eac9a",id:"l-ko","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(korean|kor)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[가-힯]{3,}"},
        {name:"🇨🇳",color:"#3eac9a",id:"l-zh","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(chinese|chi|zho|mandarin|cantonese)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[一-鿿]{3,}"},
        {name:"🇮🇳",color:"#3eac9a",id:"l-hi","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(hindi|hin)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[ऀ-ॿ]{3,}"},
        {name:"🇸🇦",color:"#3eac9a",id:"l-ar","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(arabic|ara)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[؀-ۿ]{3,}"},
        {name:"🇷🇺",color:"#3eac9a",id:"l-ru","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(russian|rus)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[Ѐ-ӿ]{3,}"},
        {name:"🇬🇷",color:"#3eac9a",id:"l-el","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(greek|ellinika|hellenic|grec|ell|gre)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|$)|[\\u0370-\\u03FF\\u1F00-\\u1FFF]{3,}"},
        {name:"🌐",color:"#3eac9a",id:"l-mu","pattern":"(?i)(?<![^\\s\\[(_\\-.,])(multi)(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]|\( )|(?<![^\\s\\[(_\\-.,])(dual[ .\\-_]?(?:audio|lang(?:uage)?|flac|ac3|aac2?))(?![ .\\-_]?sub(title)?s?)(?=[\\s\\)\\]_.\\-,]| \))"},

        {name:"REMUX",color:"#00000000",id:"remux",pattern:"(?i)\\bremux\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/remux.png"},
        {name:"Blu-ray Disc",color:"#00000000",id:"blu-ray-disc",pattern:"(?i)\\b(blu[\\s._-]?ray|bluray|bdrip|bdremux)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/blu_ray_disc.png"},
        {name:"WEB-DL",color:"#00000000",id:"webdl",pattern:"(?i)\\b(web[\\s._-]?dl|webdl)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/WEBDL_transparent_4x.png"},
        {name:"WEBRip",color:"#00000000",id:"webrip",pattern:"(?i)\\b(web[\\s._-]?rip|webrip)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/WEBRip_transparent_4x.png"},
        {name:"HDTV",color:"#00000000",id:"hdtv",pattern:"(?i)\\bhdtv\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/HDTV_transparent_4x.png"},
        {name:"DVD RIP",color:"#00000000",id:"dvd-rip",pattern:"(?i)\\b(dvd[\\s._-]?rip|dvdrip)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/DVD_RIP_transparent_4x.png"},

        {name:"4K Ultra HD",color:"#00000000",id:"4k-ultra-hd",pattern:"(?i)\\b(4k|2160p|uhd|ultra\\s*hd)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/4k_ultra_hd.png"},
        {name:"1080p Full HD",color:"#00000000",id:"1080p-full-hd",pattern:"(?i)\\b(1080p|fhd|full\\s*hd)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/1080p_full_hd.png"},
        {name:"720p HD",color:"#00000000",id:"720p-hd",pattern:"(?i)\\b720p\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/720p_hd.png"},
        {name:"480p SD",color:"#00000000",id:"480p-sd",pattern:"(?i)\\b480p\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/480p_sd.png"},

        {name:"Dolby Vision",color:"#00000000",id:"dolby-vision",pattern:"(?i)\\b(dolby\\s*vision|dovi|dv)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dolby_vision.png"},
        {name:"HDR10+",color:"#00000000",id:"hdr10-plus",pattern:"(?i)\\b(hdr10\\+|hdr10\\s*plus\\b|hdr\\s*10\\s*\\+)",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/hdr10_plus.png"},
        {name:"HDR10",color:"#00000000",id:"hdr10",pattern:"(?i)\\b(hdr10|hdr\\s*10)\\b(?!\\s*\\+|\\s*plus)",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/hdr10.png"},
        {name:"HDR",color:"#00000000",id:"hdr",pattern:"(?i)\\bhdr\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/hdr.png"},
        {name:"SDR",color:"#00000000",id:"sdr",pattern:"(?i)\\bsdr\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/SDR_transparent_4x.png"},
        {name:"IMAX Enhanced",color:"#00000000",id:"imax-enhanced",pattern:"(?i)\\b(imax[\\s._-]*enhanced)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/imax_enhanced.png"},
        {name:"IMAX",color:"#00000000",id:"imax",pattern:"(?i)\\b(imax)\\b(?![\\s._-]*enhanced)",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/imax.png"},

        {name:"HEVC",color:"#00000000",id:"hevc",pattern:"(?i)\\b(hevc|h[\\s._-]?265|x265)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/HEVC_transparent_4x.png"},
        {name:"AVC",color:"#00000000",id:"avc",pattern:"(?i)\\b(avc|h[\\s._-]?264|x264)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/AVC_transparent_4x.png"},
        {name:"10Bit",color:"#00000000",id:"10bit",pattern:"(?i)\\b(10[\\s._-]?bit|10b|hi10p)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/10Bit_transparent_4x.png"},
        {name:"8Bit",color:"#00000000",id:"8bit",pattern:"(?i)\\b(8[\\s._-]?bit|8b)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/8Bit_transparent_4x.png"},

        {name:"Dolby Atmos",color:"#00000000",id:"dolby-atmos",pattern:"(?i)\\b(dolby\\s*atmos|atmos)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dolby_atmos.png"},
        {name:"TrueHD",color:"#00000000",id:"truehd",pattern:"(?i)\\b(truehd|true\\s*hd|dolby\\s*truehd)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/truehd.png"},
        {name:"Dolby Digital Plus",color:"#00000000",id:"dolby-digital-plus",pattern:"(?i)(?<!a-z)\\b(ddp[\\s._-]*[0-9][\\s._-]*[0-9]|ddp|dd\\+|dolby[\\s._-]*digital[\\s._-]*plus|e-?ac-?3)(?![a-z])",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dolby_digital_plus.png"},
        {name:"Dolby Digital",color:"#00000000",id:"dolby-digital",pattern:"(?i)(?<!a-z)\\b(dd[\\s._-]*[0-9][\\s._-]*[0-9]|dd|dolby[\\s._-]*digital|ac-?3)(?![\\s._-]*plus|\\+|p|[a-z])",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dolby_digital.png"},
        {name:"DTS:X",color:"#00000000",id:"dts-x",pattern:"(?i)\\b(dts[:\\s._-]*x)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dts_x.png"},
        {name:"DTS-HD Master Audio",color:"#00000000",id:"dts-hd-master-audio",pattern:"(?i)\\b(dts[\\s._-]*hd[\\s._-]*ma|dtshd\\s*ma|dts[\\s._-]*hd[\\s._-]*master)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dts_hd_master_audio.png"},
        {name:"DTS-HD",color:"#00000000",id:"dts-hd",pattern:"(?i)\\b(dts[\\s._-]*hd|dtshd)(?![\\s._-]*(ma|master)|ma)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dts_hd.png"},
        {name:"DTS",color:"#00000000",id:"dts",pattern:"(?i)\\bdts\\b(?![\\s._:-]*(x|hd))",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/dts.png"},
        {name:"7.1 Audio",color:"#00000000",id:"71-audio",pattern:"(?i)\\b(7\\.1|7-1|8ch|8\\s*channel)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/7_1_audio.png"},
        {name:"5.1 Audio",color:"#00000000",id:"51-audio",pattern:"(?i)\\b(5\\.1|5-1|6ch|6\\s*channel)\\b",image:"https://raw.githubusercontent.com/leonevz/Elite-Badges/main/Badges/5_1_audio.png"}
    ];

    function init(){
        window.lampaSettings.addItem('badges_filters', {
            name: 'Filters Badges',
            icon: '🎭',
            component: 'settings',
            template: 'switch'
        });

        window.lampaSettings.addComponent('badges-list', {
            template: 'component',
            render: function(c, d){
                const div = document.createElement('div');
                div.style.padding = '12px';
                div.style.maxHeight = '500px';
                div.style.overflowY = 'auto';
                div.style.background = '#111';

                BADGES.forEach(b => {
                    const row = document.createElement('div');
                    row.style.display = 'flex';
                    row.style.alignItems = 'center';
                    row.style.marginBottom = '8px';
                    const lbl = document.createElement('div');
                    lbl.style.flex = '1';
                    lbl.style.fontSize = '17px';
                    lbl.textContent = b.name;
                    const chk = document.createElement('input');
                    chk.type = 'checkbox';
                    chk.checked = !!window.lampaFilters.get(b.id);
                    chk.style.transform = 'scale(1.3)';
                    chk.addEventListener('change', () => {
                        if(chk.checked){
                            if(!window.lampaFilters.get(b.id)) window.lampaFilters.add(b.id, {name:b.name, color:b.color, borderColor:b.color, groupId:'gl', pattern:b.pattern, type:'filter', image:b.image});
                        }else{
                            if(window.lampaFilters.get(b.id)) window.lampaFilters.remove(b.id);
                        }
                    });
                    row.appendChild(lbl);
                    row.appendChild(chk);
                    div.appendChild(row);
                });

                const btn = document.createElement('button');
                btn.textContent = 'Вставити JSON';
                btn.style.width = '100%';
                btn.style.marginTop = '12px';
                btn.style.padding = '10px';
                btn.style.background = '#3eac9a';
                btn.style.color = '#000';
                btn.style.border = 'none';
                btn.style.borderRadius = '6px';
                btn.style.fontWeight = 'bold';
                btn.addEventListener('click', () => {
                    const jsonText = prompt('Вставте JSON з бейджами:');
                    if(jsonText) {
                        try {
                            const data = JSON.parse(jsonText);
                            if(data.badges) window.lampaFilters.load(data.badges);
                            alert('Бейджі успішно завантажено!');
                        } catch(e) {
                            alert('Неправильний JSON');
                        }
                    }
                });

                const mainDiv = document.createElement('div');
                mainDiv.appendChild(div);
                mainDiv.appendChild(btn);
                return mainDiv;
            }
        });

        window.lampaSettings.on('badges_filters', state => {
            if(state) BADGES.forEach(b => { if(!window.lampaFilters.get(b.id)) window.lampaFilters.add(b.id, {name:b.name, color:b.color, borderColor:b.color, groupId:'gl', pattern:b.pattern, type:'filter', image:b.image}); });
            else BADGES.forEach(b => { if(window.lampaFilters.get(b.id)) window.lampaFilters.remove(b.id); });
        });

        if(window.lampaSettings.get('badges_filters')) BADGES.forEach(b => { if(!window.lampaFilters.get(b.id)) window.lampaFilters.add(b.id, {name:b.name, color:b.color, borderColor:b.color, groupId:'gl', pattern:b.pattern, type:'filter', image:b.image}); });
    }

    if(typeof window.lampaSettings !== 'undefined') init();
})();
