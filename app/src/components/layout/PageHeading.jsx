export const PageHeading = ({page}) => {
    return (
        <div className="flex items-center justify-center gap-3">
            <span className="relative orangeDot"></span>
                <h2 className="text-secondary text-4xl font-semibold">{page}</h2>
            <span className="relative orangeDot"></span>
        </div>
    )
}