function transform (words) {
    const dict = []

    words.split(';').forEach(item => {
        item = item.toLowerCase().replace(/,(?=[^\s])/g, ", ")
        const split = item.split('-')

        if (split.length < 2) return

        dict.push({
            no: split[0].trim(),
            pl: split[1].trim(),
        })
    })

    return dict
}
