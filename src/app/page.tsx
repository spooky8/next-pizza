import { Container, Filters, Title, TopBar } from '@/components/shared'
import { ProductsGroupList } from '@/components/shared/products-group-list'

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
        
      </Container>
      <TopBar />

      <Container className='mt-10 pb-14' >
        <div className='flex gap-[80px]'>

          <div className='w-[250px]'>
            <Filters />
          </div>
          
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList 
                title='Пиццы'
                items={[
                  {
                    id: 1,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  }                       
                ]}
                categoryId={1}
              />

              <ProductsGroupList 
                title='Комбо'
                items={[
                  {
                    id: 1,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 2,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 3,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 4,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 5,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 6,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 7,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  },
                  {
                    id: 8,
                    name: 'Бефстроганов',
                    price: 550,
                    imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEF9E43DC39C94AA5765DBF1C97100.avif',
                    items: [{price: 550}]
                  }                       
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
