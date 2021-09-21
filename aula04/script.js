var listaFilmes = ['https://lh3.googleusercontent.com/proxy/X7UHLHVcDxA_lHbV2j0gqRQh_3uyvjJLo-917Ns5ROadKC3BEhkT_y0ksNgV0Vqr7M4UNPvssPJDv1_tFIfZvpvqK7JhF24NL7VFb9ZTpEFlizUT0ppVn2sACA',
'https://cdn.vox-cdn.com/thumbor/uSS5y7aUJorIVyWkDBTz9OYuDgA=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15947469/242783.jpg.jpg',
'https://www.nba.com/resources/static/team/v2/lakers/images/history/shaq/images/shaq_img_250x350.jpg',
'https://upload.wikimedia.org/wikipedia/commons/a/a7/LeBron_James_Lakers.jpg']

for (let el of listaFilmes) {
    document.write(`<img src="${el}"">`)
}