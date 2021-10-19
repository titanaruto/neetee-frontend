let updateForm = function updateForm(URL, params, returnElement = null, addParams = null, errorCallback = null) {
    let token = document.querySelector('meta[name="csrf-token"]')['content'];
    fetch(URL, {
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest",
            "X-CSRF-TOKEN": token,
        },
        method: 'post',
        credentials: "same-origin",
        body: JSON.stringify(params)
    }).then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        if (data.success) {
            if (returnElement != null && addParams != null) {
                returnElement(data, addParams);
            } else if (returnElement != null) {
                returnElement(data);
            }
        } else if (data.error) {
            if (errorCallback != null && addParams != null) {
                errorCallback(data, addParams);
            } else if (errorCallback != null) {
                errorCallback(data);
            }
        }

    }).catch(function (err) {
        // There was an error
        console.warn('Something went wrong.', err);
    });
}