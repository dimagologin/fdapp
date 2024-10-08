import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { LucideUserCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { isLocalhost } from '../api/api'
import { logout } from '../auth/logout'
import { clearUser, useUser } from '../auth/user'
import { pageMainColumnClassName } from './AppLayout'
import { Logo } from './Logo'

const anonNavigation = [
  { name: 'Buy proxies', href: '/proxies/buy' },
  { name: 'Account', href: '/account/login' },
];
const customerNavigation = [
  { name: 'Dashboard', href: '/' },
  { name: 'Setup proxies', href: '/proxy-pool/create' },
  { name: 'Account', href: '/account/login' },
  { name: 'Buy more proxies', href: '/proxies/buy' },
];

const useNavigation = () => {
  const user = useUser()
  let navigation = !!user ? customerNavigation : anonNavigation;

  if (user && isLocalhost) {
    navigation = [...navigation, { name: 'Debug', href: '/debug' }]
  }
  return navigation
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function TopNav() {
  const user = useUser();
  const navigation = useNavigation()

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className={pageMainColumnClassName}>
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Logo />
              {/* <img
                alt="FloppyData"
                src=""
                className="h-8 w-auto"
              /> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    // aria-current={item.current ? 'page' : undefined}
                    className={({ isActive, isPending }) => classNames(
                      isActive ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'rounded-md px-3 py-2 text-sm font-medium',
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {!user?.googleProfile?.picture &&
                    <LucideUserCircle2 className="inline-block h-8 w-8 stroke-[1.5px] stroke-white rounded-full"
                    />
                  }
                  {user?.googleProfile?.picture &&
                    <img
                      alt=""
                      src={
                        user?.googleProfile?.picture ||
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      }
                      className="h-8 w-8 rounded-full"
                    />
                  }
                </MenuButton>
              </div>
              {!!user &&
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Your Profile
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="#"
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </MenuItem>
                </MenuItems>
              }
              {!user &&
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a href="/proxies/buy" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Buy proxies
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="/account/login" className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100">
                      Login
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a href="/account/signup"
                      onClick={clearUser}
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                    >
                      Sign up
                    </a>
                  </MenuItem>
                </MenuItems>
              }
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {customerNavigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
