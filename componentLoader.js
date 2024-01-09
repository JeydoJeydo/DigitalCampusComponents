/**
 * FLOW: setup -> loadAPI -> Hydrate DOM
 */

const loadApi = async () => {
	return new Promise((resolve, reject) => {
		fetch("./api/api.json")
			.then((res) => {
				if (!res.ok) {
					reject(`Network response wasn't ok`);
				}
				return res.json();
			})
			.then((data) => {
				resolve(data);
			})
			.catch((error) => {
				reject(`Error fetching API: ${error}`);
			});
	});
};

const createSSEInstance = () => {
	// TODO add SSE
};

const hydrateDOM = () => {
	// ABC
	const container = document.querySelector("#main-wrapper");
	container.insertAdjacentHTML("beforeend", `<my-component title="silas"></my-component>`);
};

const setup = async () => {
	loadApi()
		.then((data) => {
			console.log("got", data);
			hydrateDOM();
		})
		.catch((err) => {
			throw new Error(err);
		});
};
setup();
