export class LocalStorageService {
	// setter
	public static Set(key: string, data: any, expiresMs?: number) {
		const nowInMs = new Date().getTime();

		if (expiresMs) {
			let _data = {
				value: data,
				expiry: nowInMs + expiresMs
			};

			localStorage.setItem(key, JSON.stringify(_data));
		} else {
			localStorage.setItem(key, JSON.stringify(data));
		}
	}

	// getter
	public static Get(key: string) {
		const dataStr: string = localStorage.getItem(key);

		if (!dataStr) return null;

		const data = JSON.parse(dataStr);

		if (this.IsExpired(data)) {
			localStorage.removeItem(key);

			return null;
		}

		return JSON.parse(data);
	}

	// delete
	public static DeleteKey(key: string) {
		localStorage.remove(key);

		return;
	}

	public static DeleteAll() {
		localStorage.clear();

		return;
	}

	public static IsExpired(data: any) {
		const nowInMs = new Date().getTime();

		if (data?.expiry && nowInMs > data?.expiry) return true;

		return false;
	}

	// public static GetAllExpiredKeys(): string[] {
	// 	const now: number = new Date().getTime();
	// 	return LocalStorageService.GetAllExpirationKeys().filter((key) => ls.get(key) < now);
	// }

	// public static GetAllExpirationKeys(): string[] {
	// 	const expirationKeys: string[] = [];

	// 	for (let key in localStorage) if (key.slice(-4) === '_EXP') expirationKeys.push(key);

	// 	return expirationKeys;
	// }
}
