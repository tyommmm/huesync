import React, { FC } from "react";
import SectionHeading from "@/shared/SectionHeading";
import QACardList from "./QACardList";

const Faq: FC = () => {
	return (
		<div id="faq">
			<SectionHeading
				title="FAQ"
				subtitle="Answers to some questions you might have."
			/>
			<QACardList />
		</div>
	);
};

export default Faq;
