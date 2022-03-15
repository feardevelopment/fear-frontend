export type HTTPResponse = {
	type: string;
	code: number;
	result: string;
};

export type EMailHeader = {
	from: string;
	subject: string;
	date: string;
	read: boolean;
	uid: string;
};

export type EMailBody = {
	from: string;
	subject: string;
	date: string;
	body: string;
};
