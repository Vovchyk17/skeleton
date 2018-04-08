<?php get_header(); /* Template Name: Example */ ?>
    <section class="content container">
        <?php if (have_posts()) : while (have_posts()) : the_post();
            the_content();
        endwhile; endif; ?>
    </section>
<?php get_footer(); ?>