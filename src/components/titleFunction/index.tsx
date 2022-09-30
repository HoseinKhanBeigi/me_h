import { TextBlock } from "../textBlock";
interface Props {
    subtitle?: string;
    params?: string;
    children: React.ReactNode;
}
export const TitleFunction: React.FC<Props> = ({
    subtitle,
    params,
    children,
}) => {
    return (
        <div>
            <h1 className="title">
                {children}
                {params && <span className="params">{params}</span>}
            </h1>
            {subtitle && (
                <TextBlock>
                    <p className="-gray">{subtitle}</p>
                </TextBlock>
            )}
        </div>
    );
};
