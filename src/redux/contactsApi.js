import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62d2b57381cb1ecafa6470e8.mockapi.io/',
    }),

    tagTypes: ['contacts'],
    endpoints: builder => ({
        getContacts: builder.query({
            query: () => 'contacts',
            providesTags: ['contacts'],
        }),

        createContact: builder.mutation({
            query: body => ({
                url: 'contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['contacts'],
        }),

        deleteContact: builder.mutation({
            query: contactId => ({
                url: `contacts/${contactId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['contacts'],
        })
    }),
})

export const {
    useGetContactsQuery,
    useCreateContactMutation,
    useDeleteContactMutation,
} = contactsApi;