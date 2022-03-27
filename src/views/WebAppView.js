import React from 'react';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import IAppContext from '../IAppContext';
import Config from '../Config';
import ClientUtils from '../common/ClientUtils';
import SnackBar from '../common/SnackBar';
import Loading from '../components/Loading';
import DrawerView from '../components/DrawerView';
import Toolbar from '../components/Toolbar';
import { Menu, MenuList } from '../components/Menu';
import FloatActionButton from '../components/FloatActionButton';
import Banner from '../components/Banner';
import Live2dWidget from '../components/live2d-widget';
import CardRouter from './CardRouter';

const MusicPlayer = React.lazy(() => import('../components/MusicPlayer'));

class WebAppView extends React.Component {
    static propTypes = {
        appContext: PropTypes.instanceOf(IAppContext).isRequired
    };

    constructor(props) {
        super(props);
        this.drawerView = null;
        this.state = {
            isLoading: true,
            isViewMode: false,
        };
    }


    componentDidMount() {
        this.setState({ isLoading: false });

        const showWelcome = () => {
            const sessionStorageSupported = ('sessionStorage' in window && window['sessionStorage'] !== null);
            if ((!sessionStorageSupported) || sessionStorage.show_welcome === undefined) {
              setTimeout(() => {
                if (sessionStorageSupported) {
                  sessionStorage.show_welcome = true;
                }
                SnackBar.make(document.body, "Welcome", SnackBar.LENGTH_LONG).show();
              }, 1500);
            }
          };
      
          if (Config.loadLive2d) {
            Live2dWidget.load().then(() => {
              setTimeout(showWelcome, 1000);
            });
          } else {
            showWelcome();
          }
    }


    render() {
        const context = this.props.appContext;
        return (
            <DrawerView ref={instance => this.drawerView = instance}>
                <Toolbar
                    statusBarHeight={ClientUtils.getStatusBarHeight()}
                    toolbarAttach={this.state.isViewMode}
                    onSearch={this.props.handleSearch} />

                <Menu>
                    <React.Suspense fallback={<Loading />}>
                        {this.state.isLoading ? null : <MusicPlayer />}
                    </React.Suspense>
                    <MenuList>

                        <li onClick={() => context.goTo('/')}>
                            <FormattedMessage id="app.menu-item.1"
                                defaultMessage="home"
                                description="menu item1" />
                        </li>

                        <li onClick={() => {
                            SnackBar.make(null, 'test', -1)
                                .setOnShowed(this.drawerView.closeMenu)
                                .show();
                            setTimeout(this.drawerView.closeMenu, 2000);
                        }}>
                            <FormattedMessage id="app.menu-item.2"
                                defaultMessage="item2"
                                description="menu item2" />
                        </li>

                        <li onClick={() => {
                            if (document.body.classList.contains("x")) {
                                document.body.classList.remove("x");
                            } else {
                                document.body.classList.add("x");
                            }
                        }}>
                            <FormattedMessage id="app.menu-item.3"
                                defaultMessage="item3"
                                description="menu item3" />
                        </li>

                        <li onClick={() => context.changeTheme()}>
                            <FormattedMessage id="app.menu-item.theme"
                                defaultMessage="theme"
                                description="menu item theme" />
                        </li>

                        <li onClick={() => context.changeLocale()}>
                            <FormattedMessage id="app.menu-item.locale"
                                defaultMessage="locale"
                                description="menu item locale" />
                        </li>

                        {ClientUtils.isClient &&
                            <li onClick={() => ClientUtils.exit()}>
                                <FormattedMessage id="app.menu-item.exit"
                                    defaultMessage="exit"
                                    description="menu item exit" />
                            </li>
                        }

                        <li onClick={() => this.drawerView.closeMenu()}>
                            <FormattedMessage id="app.menu-item.close"
                                defaultMessage="close"
                                description="menu item close" />
                        </li>

                    </MenuList>
                </Menu>

                <main className='content'>
                    <FloatActionButton>
                        <div onClick={() => context.goTo('/test')}>2</div>
                        <div onClick={() => this.setState({ isViewMode: !this.state.isViewMode })}>3</div>
                        <div onClick={() => context.toggleWallpaperMode()}>4</div>
                    </FloatActionButton>
                    {this.state.isViewMode || <Banner />}
                    {this.state.isLoading || <CardRouter />}
                </main>

            </DrawerView>
        );
    }


    toggleViewMode = (isEnable, callback) => {
        if (isEnable === true || isEnable === false) {
            this.setState({ isViewMode: isEnable }, callback);
        }
    }
}

export default WebAppView;