import PageHeader from "./PageHeader";
import QnA from "./QnA";
import { Category } from "./QnA";
import Picture from './assets/Blue7.jpg'
import FeedbackForm from "./FeedbackForm";

export default function FAQ() {
    const qData = [
        {
            qn: 'Question 1',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Question 2',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Question 3',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
    ];

    const qData2 = [
        {
            qn: 'Question 1',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Question 2',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
        {
            qn: 'Question 3',
            ans: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.`,
        },
    ];

    return (
        <div>
            <PageHeader title='FAQ' pic={Picture}/>
            <Category name='General'/>
            <QnA data={qData}/>
            <Category name='Users'/>
            <QnA data={qData2}/>
            <FeedbackForm/>
        </div>
    );
}