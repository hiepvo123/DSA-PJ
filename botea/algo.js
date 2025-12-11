// ===============================
//    DATA STRUCTURE ALGORITHMS
// ===============================



// -----------------------------------------------
// 2. BUBBLE SORT (price)
// -----------------------------------------------
function bubbleSort(arr, type = "asc") {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            let condition =
                type === "asc"
                    ? arr[i].price > arr[i + 1].price
                    : arr[i].price < arr[i + 1].price;

            if (condition) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

        n--;
    } while (swapped);

    return arr;
}



// -----------------------------------------------
// QUICK SORT BY NAME (A-Z, Z-A)
// -----------------------------------------------
function quickSortByName(arr, type = "asc") {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        let comparison = arr[i].name.localeCompare(pivot.name);

        if (type === "asc" ? comparison < 0 : comparison > 0) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [
        ...quickSortByName(left, type),
        pivot,
        ...quickSortByName(right, type)
    ];
}


// --------------------------
// BUILD LPS ARRAY (PREFIX)
// --------------------------
function buildLPS(pattern) {
    const lps = Array(pattern.length).fill(0);
    let prefix = 0;

    for (let i = 1; i < pattern.length; i++) {
        while (prefix > 0 && pattern[i] !== pattern[prefix]) {
            prefix = lps[prefix - 1];
        }
        if (pattern[i] === pattern[prefix]) {
            prefix++;
        }
        lps[i] = prefix;
    }
    return lps;
}


// --------------------------
// KMP SEARCH FOR NAME
// --------------------------
function KMPSearch(arr, keyword) {
    keyword = keyword.toLowerCase();
    const results = [];

    if (keyword === "") return arr;

    const lps = buildLPS(keyword);

    for (const item of arr) {
        const text = item.name.toLowerCase();
        let i = 0, j = 0;

        while (i < text.length) {
            if (text[i] === keyword[j]) {
                i++;
                j++;
            }
            if (j === keyword.length) {
                results.push(item);
                break;
            }
            if (i < text.length && text[i] !== keyword[j]) {
                if (j !== 0) j = lps[j - 1];
                else i++;
            }
        }
    }
    return results;
}