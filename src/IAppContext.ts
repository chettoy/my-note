export default interface IAppContext {
    changeTheme: (theme: string) => void;
    changeLocale: (locale: string) => void;
    goTo: (path: string) => void;
    toggleWallpaperMode: () => void; 
}