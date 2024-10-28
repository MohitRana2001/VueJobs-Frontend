<script>
    import Hero from '@/components/Hero.vue';
    import HomeCards from '@/components/HomeCards.vue';
    import JobListings from '@/components/JobListings.vue';

    export default{
        components: {
            Hero,
            HomeCards,
            JobListings
        }
    }
</script>

<template>
    <Hero />
    <HomeCards />
    <JobListings :limit="3" :showButton="true" />
</template>